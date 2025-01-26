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
            className="font-bold text-lg text-white bg-indigo-600 w-48 h-14 rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform duration-200"
        >
            Join a Meeting
        </button>
    );
};
