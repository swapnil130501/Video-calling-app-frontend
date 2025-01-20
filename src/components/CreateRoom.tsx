import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const CreateRoom: React.FC = () => {
    const { socket } = useContext(SocketContext);

    const initRoom = () => {
        socket.emit("create-room");
    }

    return (
        <button onClick={initRoom}>
            Start a new meeting in a room
        </button>
    )
}

export default CreateRoom;