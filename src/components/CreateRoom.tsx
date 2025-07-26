import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const CreateRoom: React.FC = () => {
    const { socket } = useContext(SocketContext);

    const initRoom = () => {
        socket.emit("create-room");
    }

    return (
        <button onClick={initRoom} className="bg-neutral-200 text-neutral-800 px-6 py-3 shadow-intense border border-neutral-300 rounded-md hover:bg-neutral-300 transition">
            Create a Meeting
        </button>
    )
}

export default CreateRoom;