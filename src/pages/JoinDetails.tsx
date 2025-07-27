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
        <div className="flex flex-col items-center justify-center h-screen bg-neutral-900">
            <h1 className="text-2xl font-bold mb-6 text-neutral-100">Join a Meeting</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 w-64 rounded bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="mb-4 p-2 w-64 rounded bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                onClick={handleJoinRoom}
                className="font-semibold text-lg text-white bg-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700"
            >
                Join Room
            </button>
        </div>
    );
};

export default JoinDetails;
