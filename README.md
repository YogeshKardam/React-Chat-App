# Chat App

## User Profile Header

```javascript
<div className="p-6 border-b border-gray-700">
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
      <span className="text-lg font-bold">A</span>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Avatar</h2>
      <p className="text-sm text-gray-400">Online</p>
    </div>
  </div>
</div>
```

## User List

```javascript
<div className="flex-1 overflow-y-auto">
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-400 mb-3">CONTACTS</h3>
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => setSelectedUser(user.name)}
          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
            selectedUser === user.name
              ? "bg-gray-700 border border-gray-600"
              : "hover:bg-gray-700/50"
          }`}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">{user.name.charAt(5)}</span>
            </div>
            {user.online && (
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user.name}</p>
            <p className="text-xs text-gray-400">{user.lastSeen}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

## Action Buttons

```javascript
<div className="p-4 border-t border-gray-700">
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Settings</span>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-3 text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
```

## Main Chat Area

```javascript
<div className="p-6 border-b border-gray-700 bg-gray-800">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-sm font-bold">U</span>
      </div>
      <div>
        <h2 className="text-lg font-semibold">{selectedUser}</h2>
        <p className="text-sm text-green-400">Online</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
```

## Messages Area

```javascript
<div className="flex-1 overflow-y-auto p-6 space-y-4">
  {messages.map((msg) => (
    <div
      key={msg.id}
      className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
          msg.isOwn
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            : "bg-gray-700 text-gray-100"
        } ${msg.isOwn ? "rounded-br-md" : "rounded-bl-md"}`}
      >
        <p className="text-sm">{msg.text}</p>
        <p
          className={`text-xs mt-1 ${
            msg.isOwn ? "text-blue-100" : "text-gray-400"
          }`}
        >
          {msg.time}
        </p>
      </div>
    </div>
  ))}
</div>
```

## Message Input

```js
<div className="p-6 border-t border-gray-700 bg-gray-800">
  <div className="flex items-end space-x-3">
    <button className="p-3 hover:bg-gray-700 rounded-full transition-colors">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
        />
      </svg>
    </button>
    <div className="flex-1 relative">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="w-full bg-gray-700 border border-gray-600 rounded-2xl px-4 py-3 pr-12 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows="1"
        style={{ minHeight: "48px", maxHeight: "120px" }}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-600 rounded-full transition-colors">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5"
          />
        </svg>
      </button>
    </div>
    <button
      onClick={handleSendMessage}
      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-3 rounded-full transition-all duration-200 transform hover:scale-105"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  </div>
</div>
```

## Container

```js
<div className="flex h-screen bg-gray-900 text-white">
  {/* Sidebar */}
  <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col"></div>
</div>
```

## Css For index.css

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#root {
  height: 100%;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #374151;
}

::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Auto-resize textarea */
textarea {
  resize: none;
  overflow-y: auto;
}
```

## App function Code

```js
const [selectedUser, setSelectedUser] = useState('Username')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: 'Message 1', isOwn: false, time: '10:30 AM' },
    { id: 2, text: 'Message 2', isOwn: true, time: '10:32 AM' },
    { id: 3, text: 'Message 3', isOwn: false, time: '10:35 AM' },
    { id: 4, text: 'Message 4', isOwn: true, time: '10:38 AM' },
  ])

  const users = [
    { id: 1, name: 'User 1', online: true, lastSeen: 'online' },
    { id: 2, name: 'User 2', online: false, lastSeen: '2 min ago' },
    { id: 3, name: 'User 3', online: true, lastSeen: 'online' },
    { id: 4, name: 'User 4', online: false, lastSeen: '1 hour ago' },
    { id: 5, name: 'User 5', online: true, lastSeen: 'online' },
    { id: 6, name: 'User 6', online: false, lastSeen: '3 min ago' },
    { id: 7, name: 'User 7', online: true, lastSeen: 'online' },
    { id: 8, name: 'User 8', online: false, lastSeen: '5 min ago' },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isOwn: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

```
#   R e a c t - C h a t - A p p  
 