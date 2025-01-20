import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import UserFeedPlayer from "../components/UserFeedPlayer";

const Room: React.FC = () => {
    const { id } = useParams();
    const { socket, user, stream } = useContext(SocketContext);
    
    useEffect(() => {
        if(user) {
            socket.emit('joined-room', { roomId: id, peerId: user._id});
        }
    }, [id, user, socket])

    return (
        <div>
            Room: { id }
            <UserFeedPlayer stream={stream}/>
        </div>
    )
}

export default Room;