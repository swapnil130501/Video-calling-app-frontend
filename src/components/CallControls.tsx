import { useState } from "react";
import { CiVideoOff, CiVideoOn } from "react-icons/ci";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export const CallControls = ({ stream }: { stream: MediaStream }) => {
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    
    function toggleVideo() {
        stream.getVideoTracks()[0].enabled = !isVideoOn;
        setIsVideoOn(!isVideoOn);
    }

    function toggleMic() {
        stream.getAudioTracks()[0].enabled = !isVideoOn;
        setIsMicOn(!isMicOn);
    }

    return (
        <div className="flex justify-center items-center gap-4 p-4 bg-gray-900 text-white w-full h-16 shadow-lg">
            <button
                onClick={toggleVideo}
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    isVideoOn ? "bg-green-600 hover:bg-green-500" : "bg-red-600 hover:bg-red-500"
                } focus:ring-4 ${
                    isVideoOn ? "focus:ring-green-300" : "focus:ring-red-300"
                } transition-all`}
                title={isVideoOn ? "Turn Off Video" : "Turn On Video"}
            >
                {isVideoOn ? <CiVideoOn className="text-xl" /> : <CiVideoOff className="text-xl" />}
            </button>

            <button
                onClick={toggleMic}
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    isMicOn ? "bg-blue-600 hover:bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                } focus:ring-4 ${
                    isMicOn ? "focus:ring-blue-300" : "focus:ring-gray-300"
                } transition-all`}
                title={isMicOn ? "Mute Microphone" : "Unmute Microphone"}
            >
                {isMicOn ? <FaMicrophone className="text-lg" /> : <FaMicrophoneSlash className="text-lg" />}
            </button>
        </div>
    );
};
