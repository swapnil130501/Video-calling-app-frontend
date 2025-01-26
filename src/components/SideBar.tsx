export const SideBar: React.FC = () => {
    return (
        <div className="sticky top-0 left-0 flex h-screen w-1/6 px-4 py-6 bg-gray-700">
            <div className="text-white">
                <h1 className="text-xl font-bold mb-4">Sidebar</h1>
                <ul className="space-y-4">
                    <li className="hover:bg-gray-600 px-3 py-2 rounded-md cursor-pointer">Item 1</li>
                    <li className="hover:bg-gray-600 px-3 py-2 rounded-md cursor-pointer">Item 2</li>
                    <li className="hover:bg-gray-600 px-3 py-2 rounded-md cursor-pointer">Item 3</li>
                </ul>
            </div>
        </div>
    );
};
