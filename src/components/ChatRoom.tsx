export const ChatRoom: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg h-screen w-96">
            <div className="">
                <input className="border-none bg-gray-700 text-white w-full h-10 p-2 rounded-lg"
                    type="text" 
                    placeholder="Type a message..."
                    value={"test"}
                />
            </div>

            <button className="text-sm font-bold text-white mt-5 bg-indigo-600 w-16 h-8 rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform duration-200">
                Send
            </button>
        </div>
    )
}