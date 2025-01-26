import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import UserFeedPlayer from "../components/UserFeedPlayer";

const Room: React.FC = () => {
    const { id } = useParams();
    const { socket, user, stream, peers } = useContext(SocketContext);

    // Emit joined-room when the component mounts and when user and stream are available
    useEffect(() => {
        if (user && stream && id) {
            console.log("User joining the room", id);
            socket.emit('joined-room', { roomId: id, peerId: user._id });
            console.log("peer id",  user._id);
        }
    }, [id, user, stream, socket]);

    return (
        <div className="px-4 py-6 flex flex-col items-center justify-center">
            Room: { id }
            <div>
                Your user feed
                <UserFeedPlayer stream={stream} />
            </div>

            <div>
                Other user feed
                {Object.keys(peers).map((peerId) => (
                    <UserFeedPlayer key={peerId} stream={peers[peerId].stream} />
                ))}
            </div>
        </div>
    );
};

export default Room;
