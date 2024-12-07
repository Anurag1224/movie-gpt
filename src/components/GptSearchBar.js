const GptSearchBar = () => {
    return (
        <div className="pt-[10%] flex justify-center relative ">
            <form className="w-1/2 bg-black grid grid-cols-12 p-6 bg-opacity-80 rounded-sm">
                <input type="text" className="px-4 py-1 mx-2 m-2 col-span-10" placeholder="What would you like to watch today?"/>
                <button className="bg-red-700 text-white rounded-sm px-4 py-1 m-2 col-span-2 ">Search</button>
            </form>
        </div>
    );
};

export default GptSearchBar;