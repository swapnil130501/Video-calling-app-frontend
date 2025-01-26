import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { UserFeedPlayer } from '../components/UserFeedPlayer';
import { CallControls } from '../components/CallControls';

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
        <div className="relative h-screen w-full bg-gray-900">
            {/* Full-Screen Remote Participant Feed */}
            <div className="absolute inset-0 bg-black">
                {Object.keys(peers).length > 0 ? (
                    Object.keys(peers).map((peerId) => (
                        <UserFeedPlayer
                            key={peerId}
                            stream={peers[peerId].stream}
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full text-white">
                        Waiting for participants...
                    </div>
                )}
            </div>

            {/* Local User Feed (Bottom Right) */}
            {stream && (
                <div className="absolute bottom-20 right-4 w-1/5 h-1/3 bg-gray-800 rounded-lg shadow-lg">
                    <UserFeedPlayer stream={stream} />
                </div>
            )}

            {/* Call Controls */}
            <div className="fixed bottom-0 left-0 w-full">
                <CallControls stream={stream} />
            </div>
        </div>
    );
};

export default Room;
