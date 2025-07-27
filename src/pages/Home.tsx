import CreateRoom from "../components/CreateRoom";
import { JoinRoom } from "../components/JoinRoom";
import { SideBar } from "../components/SideBar";

const Home: React.FC = () => {
    return (
        <div className="flex bg-neutral-900">
            <SideBar />
            <div className="flex flex-col w-full items-center justify-center space-y-6">
                <CreateRoom />
                <JoinRoom />
            </div>
        </div>
    );
};

export default Home;
