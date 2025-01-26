import { Link } from "react-router-dom";
import { sideBarLinks } from "../constants/constants";

export const SideBar: React.FC = () => {
    return (
        <div className="sticky top-0 left-0 flex flex-col h-screen w-1/6 px-4 py-6 bg-gray-800">
            <div className="flex flex-col gap-6">
                {sideBarLinks.map((it) => {
                    const isActive = window.location.pathname === it.route;
                    return (
                        <Link
                            to={it.route}
                            key={it.route}
                            className={`text-white font-bold text-lg py-2 px-4 rounded-lg hover:bg-indigo-600 ${
                                isActive ? "bg-indigo-700" : "bg-gray-800"
                            }`}
                        >
                            {it.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};
