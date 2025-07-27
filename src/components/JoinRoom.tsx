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
            className="font-semibold text-lg text-white bg-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700"
        >
            Join a Meeting
        </button>
    );
};