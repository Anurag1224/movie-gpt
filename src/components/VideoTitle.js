const VideoTitle = ({title,overview}) => {
    return (
        <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4 text-justify">{overview}</p>
            <div>
                <button className="bg-white text-black rounded-sm px-8 mr-2 py-1 hover:bg-opacity-80"> ▷ Play</button>
                <button className="bg-gray-500 text-white rounded-sm px-8 py-1 bg-opacity-40"> &#9432; More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;