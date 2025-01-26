import CreateRoom from "../components/CreateRoom";
import { JoinRoom } from "../components/JoinRoom";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full space-y-6 bg-gray-900">
            <CreateRoom />
            <JoinRoom />
        </div>
    )
}

export default Home;