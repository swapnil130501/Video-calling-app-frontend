import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

interface Message {
    peerId: string;
    text: string;
}

export const ChatRoom: React.FC = () => {
    const [message, setMessage] = useState("");
    const { id } = useParams();
    const { socket, user } = useContext(SocketContext);
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = () => {
        if (!id || !user || !message.trim()) {
            console.error("Invalid room ID, user details, or empty message.");
            return;
        }

        console.log("Sending message:", message);
        socket.emit("send-message", { roomId: id, peerId: user._id, message });
        setMessage("");
        setMessages([...messages, { peerId: user._id, text: message }]);
    };

    useEffect(() => {
        socket.on("new-message", ({ peerId, message }: Message) => {
            setMessages((prev) => [...prev, { peerId, text: message }]);
        });

        // Cleanup listener on unmount
        return () => {
            socket.off("new-message");
        };
    }, [socket]);

    return (
        <div className="bg-gray-800 p-4 rounded-lg h-1/2 w-96 flex flex-col">
            {/* Message Display */}
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 mb-2 rounded-lg ${
                            msg.peerId === user._id ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-200"
                        }`}
                    >
                        <p className="text-sm font-bold">{msg.peerId === user._id ? "You" : `User: ${msg.peerId}`}</p>
                        <p className="text-sm">{msg.text}</p>
                    </div>
                ))}
            </div>

            {/* Input Box */}
            <input
                className="border-none bg-gray-700 text-white w-full h-10 p-2 rounded-lg"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            {/* Send Button */}
            <button
                onClick={sendMessage}
                className="text-sm font-bold text-white mt-2 bg-indigo-600 w-full h-10 rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform duration-200"
            >
                Send
            </button>
        </div>
    );
};
