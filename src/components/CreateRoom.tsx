import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const CreateRoom: React.FC = () => {
    const { socket } = useContext(SocketContext);

    const initRoom = () => {
        socket.emit("create-room");
    }

    return (
        <button onClick={initRoom} className="font-bold text-lg text-white bg-indigo-600 w-48 h-14 rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform duration-200">
            Create a Meeting
        </button>
    )
}

export default CreateRoom;