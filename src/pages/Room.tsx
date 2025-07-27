import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { UserFeedPlayer } from '../components/UserFeedPlayer';
import { CallControls } from '../components/CallControls';
import { ChatRoom } from '../components/ChatRoom';

const Room: React.FC = () => {
    const { id } = useParams();
    const { socket, user, stream, peers } = useContext(SocketContext);

    const totalUsers = Object.keys(peers).length + (stream ? 1 : 0);

    // Emit joined-room when the component mounts and when user and stream are available
    useEffect(() => {
        if (user && stream && id) {
            console.log("User joining the room", id);
            socket.emit('joined-room', { roomId: id, peerId: user._id });
            console.log("peer id",  user._id);
        }
    }, [id, user, stream, socket]);

    const getGridClass = () => {
        if (totalUsers === 1) return "grid-cols-1"; // Single user (full screen)
        if (totalUsers === 2) return "grid-cols-2"; // Two users (side-by-side)
        if (totalUsers <= 4) return "grid-cols-2"; // Up to 4 users (2x2 grid)
        if (totalUsers <= 9) return "grid-cols-3"; // Up to 9 users (3x3 grid)
        return "grid-cols-4"; // More than 9 users (4x4 grid)
    };

    return (
        <div className="relative h-screen w-full bg-neutral-900 flex">

            <div className={`grid ${getGridClass()} gap-2 w-4/5 h-full p-4 `}style={{ height: 'calc(100vh - 64px)' }}>
                {/* Render Local User Feed */}
                {stream && (
                    <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                        <UserFeedPlayer stream={stream} />
                    </div>
                )}

                {/* Render Other Users' Feeds */}
                {Object.keys(peers).map((peerId) => (
                    <div
                        key={peerId}
                        className="w-full h-full bg-black rounded-lg overflow-hidden"
                    >
                        <UserFeedPlayer stream={peers[peerId].stream} />
                    </div>
                ))}
            </div>

            <div className="p-4" style={{ height: 'calc(100vh - 64px)' }}>
                <ChatRoom />
            </div>

            {/* Call Controls */}
            <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-800">
                <CallControls stream={stream} />
            </div>
        </div>
    );
};

export default Room;
