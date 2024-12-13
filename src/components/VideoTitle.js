import { useState } from "react";

const VideoTitle = ({title,overview}) => {
    const [showOverview, setShowOverview] = useState(false);
    return (
        <div className="w-screen aspect-video pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black ">
            <h1 className="text-6xl font-bold" onMouseEnter={() => setShowOverview(true)} onMouseLeave={() => setShowOverview(false)} >{title}</h1>
            {showOverview && (<p className="py-5 text-[14px] w-[30%] text-justify" >{overview}</p>)}
            <div className="pt-5">
                <button className="bg-white text-black rounded-sm px-8 mr-2 py-1 hover:bg-opacity-80"> ▷ Play</button>
                <button className="bg-gray-500 text-white rounded-sm px-8 py-1 bg-opacity-40"> &#9432; More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;