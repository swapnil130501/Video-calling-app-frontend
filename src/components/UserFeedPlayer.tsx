import { useEffect, useRef } from "react";

export const UserFeedPlayer: React.FC<{stream?: MediaStream}> = ({ stream }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <video 
            className="w-full h-full object-cover rounded-lg"
            ref={videoRef}
            autoPlay
        />
    )
}
