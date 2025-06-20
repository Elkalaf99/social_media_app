

const Message = require("../models/Message");
const User = require("../models/User");

const onlineUsers = new Map();

function chatSocket(io) {
  io.on("connection", (socket) => {
    socket.on("userOnline", (userId) => {
      onlineUsers.set(userId, socket.id);
      io.emit("onlineUsers", Array.from(onlineUsers.keys()));
    });

    socket.on("privateMessage", async ({ sender, receiver, content }) => {
      if (!content) return;
      const message = new Message({ sender, receiver, content });
      await message.save();
      // Send to receiver if online
      const receiverSocket = onlineUsers.get(receiver);
      if (receiverSocket) {
        io.to(receiverSocket).emit("privateMessage", message);
      }
      // Also emit to sender for confirmation
      socket.emit("privateMessage", message);
    });

    // User goes offline
    socket.on("disconnect", () => {
      for (const [userId, sockId] of onlineUsers.entries()) {
        if (sockId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
      io.emit("onlineUsers", Array.from(onlineUsers.keys()));
    });
  });
}

module.exports = chatSocket;
