import { useNavigate } from "react-router-dom";

export const JoinRoom = () => {
    const navigate = useNavigate();

    function joinMeeting() {
        console.log("joining a meeting");
        navigate("/join-details");
    }

    return (
        <button
            onClick={joinMeeting}
            className="bg-neutral-200 text-neutral-800 px-6 py-3 shadow-intense border border-neutral-300 rounded-md hover:bg-neutral-300 transition"
        >
            Join a Meeting
        </button>
    );
};