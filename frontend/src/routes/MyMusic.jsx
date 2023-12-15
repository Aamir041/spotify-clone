import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
import SingleSongCard from "../components/Shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState } from "react";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic = () => {
    const [songData,setSongData] = useState();
    const [soundPlayed,setSoundPlayed] = useState();

    const playSound = (src) => {
        console.log("Sound Begin!")
        if (soundPlayed) {
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [src],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
    }

    console.log(soundPlayed);

    useEffect(() => {
        
        // fetch Data
        const getData = async() => {
            const response = await makeAuthenticatedGETRequest("/songs/get/mysongs");
            console.log(response?.data);
            setSongData(response?.data)
        }
        getData();

    },[])

    return(
        <LoggedInContainer>
            <div className="text-white text-xl pb-5 font-semibold pl-2 my-8">My Songs</div>
            <div className=" space-y-3 overflow-auto">
                {
                    songData?.map((e, idx) => {
                        return <SingleSongCard key={`songData ${idx}`} info={e} playSound={playSound} />
                    })
                }
            </div>
        </LoggedInContainer>
    )
}

// const MyMusic = () => {
    
//     const [songData,setSongData] = useState();

//     const [soundPlayed,setSoundPlayed] = useState();

//     const playSound = (src) => {
//         console.log("Sound Begin!")
//         if(soundPlayed){
//             soundPlayed.stop();
//         }

//         let sound = new Howl({
//             src: [src],
//             html5: true,
//         });
//         setSoundPlayed(sound);
//         sound.play();
//     }

//     console.log(soundPlayed);

//     useEffect(() => {
        
//         // fetch Data
//         const getData = async() => {
//             const response = await makeAuthenticatedGETRequest("/songs/get/mysongs");
//             console.log(response?.data);
//             setSongData(response?.data)
//         }
//         getData();

//     },[])
    

//     return (
//         <div className="h-full w-full flex">
//             {/* First div will left panel */}
//             <div className=" h-full w-1/5 bg-black flex flex-col justify-between pb-10">
//                 <div>
//                     <div className="logoDiv p-6">
//                         <img src={spotify_logo} alt="spotify logo" width={125} />
//                     </div>
//                     <div className="py-5">
//                         <IconText
//                             iconName={"material-symbols:home"}
//                             displayText={"Home"}
//                         />
//                         <IconText
//                             iconName={"iconamoon:search"}
//                             displayText={"Search"}
//                         />
//                         <IconText
//                             iconName={"lucide:library"}
//                             displayText={"Library"}
//                         />
//                         <IconText
//                             iconName={"majesticons:music"}
//                             displayText={"My Music"}
//                             active={true}
//                         />
//                     </div>
//                     <div className="pt-5">
//                         <IconText
//                             iconName={"icon-park-solid:add"}
//                             displayText={"Create Playlist"}
//                         />
//                         <IconText
//                             iconName={"mdi:heart"}
//                             displayText={"Liked Songs"}
//                         />
//                     </div>
//                 </div>
//                 <div className="px-5">
//                     <div className="border border-gray-100 text-white w-2/5 flex items-center justify-center px-2 py-1 rounded-full text-sm font-semibold cursor-pointer">
//                         <Icon icon={"octicon:globe-24"} />
//                         <div className="ml-2">English</div>
//                     </div>
//                 </div>

//             </div>

//             {/* Second div will be right panel */}
//             <div className=" h-full w-4/5 bg-app-black overflow-auto">

//                 {/* Top Navbar */}
//                 <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex items-center justify-end">

//                     <div className="w-1/2 h-full flex">

//                         <div className="w-3/5 flex justify-around items-center">
//                             <RightNavBttn displayText={"Premium"} />
//                             <RightNavBttn displayText={"Support"} />
//                             <RightNavBttn displayText={"Download"} />
//                             {/* for border */}
//                             <div className="h-1/2 border-r border-white"></div>
//                         </div>

//                         <div className=" w-2/5 flex justify-around items-center">
//                             <RightNavBttn displayText={"Upload Song"} />
//                             {/* Login Buttin */}
//                             <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                                 AS
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="content p-8 overflow-hidden">
//                     <div className="text-white text-xl pb-5 font-semibold pl-2">My Songs</div>
//                     <div className=" space-y-3 overflow-auto">
//                         {
//                             songData?.map((e,idx) => {
//                                 return <SingleSongCard key={`songData ${idx}`} info={e} playSound={playSound}/>
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };


export default MyMusic;
