# Chat Test Interface

This directory contains a simple web interface to test the SocialTask chat functionality.

## Files

- `index.html` - Main chat interface with login and real-time messaging
- `register.html` - User registration page
- `README.md` - This file

## How to Use

1. **Start the server**:

   ```bash
   npm run dev
   ```

2. **Access the chat interface**:

   - Open your browser and go to `http://localhost:5000`
   - You'll see the login page

3. **Create test accounts**:

   - Click "Register here" to create new accounts
   - Or use existing accounts if you have them

4. **Test the chat**:
   - Login with different accounts in different browser tabs/windows
   - Select a user from the sidebar to start chatting
   - Send messages and see them appear in real-time

## Features

- **Real-time messaging** using Socket.IO
- **User authentication** with JWT tokens
- **Online user detection** - see who's currently online
- **Message history** - previous messages are loaded when selecting a user
- **Responsive design** - works on desktop and mobile
- **Modern UI** - clean, gradient-based design

## Testing Scenarios

1. **Single user**: Login and see the interface
2. **Multiple users**: Open multiple tabs/windows with different accounts
3. **Online status**: See users appear/disappear as they connect/disconnect
4. **Real-time messaging**: Send messages and see them instantly
5. **Message persistence**: Refresh the page and see previous messages

## Technical Details

- Uses Socket.IO for real-time communication
- RESTful API calls for authentication and user management
- Local storage for session persistence
- Responsive CSS Grid layout
- Modern JavaScript with async/await

## Troubleshooting

- Make sure the server is running on port 5000
- Check browser console for any JavaScript errors
- Ensure MongoDB is running and connected
- Verify that all API endpoints are working correctly
