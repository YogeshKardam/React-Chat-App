import {Client, Account, ID} from 'appwrite';
import conf from '../conf/conf.js';

export class AuthService{
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try {
            const userData = await this.account.create(ID.unique(), email, password, name);
            if (userData) {
                this.login({email, password});
            } else{
                return userData;
            }
        } catch (error) {
            throw error
            
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            
        }        
        return null;
    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            
        }
    }
}

const authService = new AuthService();  

export default authService;