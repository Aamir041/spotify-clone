import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
import { useState } from "react";
import { Howl,Howler } from "howler";

const LoggedInContainer = ({children}) => {

    const [songData,setSongData] = useState([]);
    const [soundPlayed, setSoundPlayed] = useState();
    const [isPaused,setIsPaused] = useState(true);

    const playSound = (src) => {
        console.log("Sound Begin!")
        if(soundPlayed){
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [src],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
    }
    
    const pauseSound = () => {
        soundPlayed.pause();
    }

    const toggelPlayPause = () => {
        if(isPaused){
            playSound("https://res.cloudinary.com/dkrgbbmdg/video/upload/v1697976208/tuk4sjq13nxafioqkwps.mp3");
        }
        else{
            pauseSound();
        }
        setIsPaused(!isPaused);
    }


    // useEffect()
    return (
        <div className="h-full w-full bg-app-black">
            <div className="w-full h-9/10 flex">

                {/* First div will left panel */}
                <div className=" h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        <div className="logoDiv p-6">
                            <img src={spotify_logo} alt="spotify logo" width={125} />
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                active={true}
                            />
                            <IconText
                                iconName={"iconamoon:search"}
                                displayText={"Search"}
                            />
                            <IconText
                                iconName={"lucide:library"}
                                displayText={"Library"}
                            />
                            <IconText
                                iconName={"majesticons:music"}
                                displayText={"My Music"}
                            />
                        </div>
                        <div className="pt-5">
                            <IconText
                                iconName={"icon-park-solid:add"}
                                displayText={"Create Playlist"}
                            />
                            <IconText
                                iconName={"mdi:heart"}
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex items-center justify-center px-2 py-1 rounded-full text-sm font-semibold cursor-pointer">
                            <Icon icon={"octicon:globe-24"} />
                            <div className="ml-2">English</div>
                        </div>
                    </div>

                </div>

                {/* Second div will be right panel */}
                <div className=" h-full w-4/5 bg-app-black overflow-auto">

                    <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex items-center justify-end">

                        <div className="w-1/2 h-full flex">

                            <div className="w-3/5 flex justify-around items-center">
                                <RightNavBttn displayText={"Premium"} />
                                <RightNavBttn displayText={"Support"} />
                                <RightNavBttn displayText={"Download"} />
                                {/* for border */}
                                <div className="h-1/2 border-r border-white"></div>
                            </div>

                            <div className=" w-2/5 flex justify-around items-center">
                                <RightNavBttn displayText={"Upload Song"} />
                                {/* Login Buttin */}
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    AS
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Dynamic Content Area */}
                    <div id="main-dynamic-content" className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>

            {/* Bottoim Music Player */}
            <div className=" w-full h-1/10 bg-black bg-opacity-50 flex text-white items-center px-4">
                <div className="w-1/4 flex items-center">

                    <img
                        src="https://i1.sndcdn.com/artworks-IewS1wvBUC3WPhXL-jGGR8g-t500x500.jpg"
                        alt="currentSongThumbnail"
                        className=" h-14 w-14 rounded"
                    />
                    <div className="pl-3 space-y-1">
                        <div className=" text-sm hover:underline hover:cursor-pointer">Farq Hai</div>
                        <div className="text-xs text-gray-500 hover:underline hover:cursor-pointer">Aamir Saudagar</div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    {/* Controls for playing songs */}
                    <div className="flex w-1/3 justify-between items-center text-gray-400" style={{ fontSize: "1.65rem" }}>
                        <Icon 
                            icon="ph:shuffle" 
                            className="cursor-pointer hover:text-white"
                        />
                        <Icon 
                            icon="material-symbols:skip-previous-outline" 
                            className="cursor-pointer hover:text-white" 
                        />
                        
                        {
                            isPaused ? 
                            <Icon 
                                fontSize={30} 
                                icon="carbon:play-filled"
                                className="cursor-pointer hover:text-white" 
                                onClick={() =>toggelPlayPause()}
                            />
                            :
                            <Icon 
                                fontSize={30} 
                                icon="carbon:pause-outline-filled"
                                className="cursor-pointer hover:text-white" 
                                onClick={() =>toggelPlayPause()}
                            />
                        }

                        <Icon 
                            icon="material-symbols:skip-next-outline" 
                            className="cursor-pointer hover:text-white" 
                        />
                        <Icon 
                            icon="ion:repeat-outline" 
                            className="cursor-pointer hover:text-white" 
                        />
                    </div>

                </div>
                <div className="w-1/4 flex justify-end">hello</div>
            </div>

        </div>
    );
};


export default LoggedInContainer;
