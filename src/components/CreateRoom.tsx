import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const CreateRoom: React.FC = () => {
    const { socket } = useContext(SocketContext);

    const initRoom = () => {
        socket.emit("create-room");
    }

    return (
        <button onClick={initRoom} className="font-semibold text-lg text-white bg-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700">
            Create a Meeting
        </button>
    )
}

export default CreateRoom;