import io from "socket.io-client";

const socketConnection = () => {
  // Connect to the Socket.IO server
  const socket = io("http://localhost:4000"); // Replace with your server URL

  // Event handler for successful connection
  socket.on("connect", () => {
    console.log("Connected to server");
  });
};

export default socketConnection;