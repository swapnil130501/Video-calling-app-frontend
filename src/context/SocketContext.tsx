import SocketIoClient from "socket.io-client";
import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { v4 as UUIDv4 } from "uuid";
import { peerReducer } from "../reducers/peerReducer";
import { addPeerAction } from "../actions/peerAction";
const WS_Server = "http://localhost:5500";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(WS_Server, {
    withCredentials: false,
    transports: ["polling", "websocket"]
});

interface Props {
    children: React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({ children }) => {

    const navigate = useNavigate(); // will help to programatically handle navigation
    
    // state variable to store the userId 
    const [user, setUser] = useState<Peer>(); // new peer user
    const [stream, setStream] = useState<MediaStream>();

    const [peers, dispatch] = useReducer(peerReducer, {}); // peers->state

    const fetchParticipantList = ({roomId, participants}: {roomId: string, participants: string[]}) => {
        console.log("Fetched room participants");
        console.log(roomId, participants);
    }

    const fetchUserFeed = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true});
        setStream(stream);
    } 

    useEffect(() => {

        const userId = UUIDv4();
        const newPeer = new Peer(userId, {
            host: "localhost",
            port: 9000,
            path: "/myapp"
        });

        setUser(newPeer);

        fetchUserFeed();

        const enterRoom = ({ roomId } : { roomId: string }) => {
            navigate(`/room/${roomId}`); 
        }

        // we will transfer the user to the room page when we collect an event of room-created from server
        socket.on("room-created", enterRoom);

        socket.on("get-users", fetchParticipantList);
    }, []);

    useEffect(() => {
        console.log("useEffect in SocketProvider triggered");
        if (!user || !stream) return;
    
        // Handle new peer joining
        socket.on("user-joined", ({ peerId }) => {
            console.log("User joined:", peerId);
    
            // Call the new peer with your stream
            const call = user.call(peerId, stream);
            call.on("stream", (remoteStream) => {
                // Dispatch action to add peer stream to state
                dispatch(addPeerAction(peerId, remoteStream));
            });
        });
    
        // Handle incoming calls from other peers
        user.on("call", (call) => {
            console.log("Receiving call from peer:", call.peer);
            // Answer the call with your own stream
            call.answer(stream);
            call.on("stream", (remoteStream) => {
                // Add the incoming stream to peers state
                dispatch(addPeerAction(call.peer, remoteStream));
            });
        });
    
    }, [user, stream, socket]);

    return (
        <SocketContext.Provider value={{ socket, user, stream, peers }}>
            {children}
        </SocketContext.Provider>
    );
}