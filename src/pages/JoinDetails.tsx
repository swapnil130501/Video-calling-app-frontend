import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinDetails: React.FC = () => {
    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        if (!name || !roomId) {
            alert("Please fill in all fields.");
            return;
        }

        navigate(`/room/${roomId}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Join a Meeting</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 border rounded w-64"
            />
            <input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="mb-4 p-2 border rounded w-64"
            />
            <button
                onClick={handleJoinRoom}
                className="font-bold text-lg text-white bg-indigo-600 px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700"
            >
                Join Room
            </button>
        </div>
    );
};

export default JoinDetails;
