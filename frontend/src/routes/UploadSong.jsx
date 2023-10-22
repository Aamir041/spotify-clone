import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
import TextInput from "../components/Shared/TextInput";
import CloudinaryUpload from "../components/Shared/CloudinaryUpload";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper"
import { useNavigate } from "react-router";


const UploadSongs = () => {
    // console.log(window.cloudinary);

    const navigate = useNavigate();
    const [songName,setSongName] = useState("");
    const [thumbnail,setThumbnail] = useState("");
    const [songUrl, setSongUrl] = useState("");
    const [uploadedSongFileName,setUploadedSongFileName] = useState();

    const submitSong = async () => {
        const songUploadData = {
            name: songName,
            thumbnail: thumbnail,
            track: songUrl
        };

        const response = await makeAuthenticatedPOSTRequest("/songs/create", songUploadData);

        if(response.error){
            alert("Cloud Not Create Song!");
            return ;
        }
        alert("Success");
        navigate("/home");

        console.log(response);
    }
    
    return (
        <div className="h-full w-full flex">
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

                <div className=" content p-8 pt-0 overflow-auto">
                    <div className=" text-2xl font-semibold mb-5 text-white mt-8">
                        Upload A Song
                    </div>

                    <div className=" w-full flex space-x-3 ">
                        <div className="w-1/2 ">
                            <TextInput 
                                label={"Song Name"} 
                                placeholder={"Name"} 
                                labelClass={"text-white"} 
                                value={songName} 
                                setValue={setSongName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                                label={"Thumbnail"} 
                                placeholder={"Enter Thumbnail URL"} 
                                labelClass={"text-white"} 
                                value={thumbnail} 
                                setValue={setThumbnail}
                            />
                        </div>
                    </div>
                    
                    {/* Choosing File To Upload */}
                    <div className="py-5">

                        {/* Displayes the File Name Uploaded To Sound Cloud */}
                        {
                            uploadedSongFileName ?
                            <div className=" bg-white px-3 py-2 w-1/3 rounded-full font-semibold">
                                {uploadedSongFileName?.substring(0,20)}...
                            </div>
                            : <CloudinaryUpload
                                setUrl={setSongUrl}
                                setName={setUploadedSongFileName}
                            />
                        }
                    </div>

                    {/* Submiiting Song Button */}
                    <div className=" bg-white w-40 flex items-center justify-center p-3 rounded-full cursor-pointer font-semibold" onClick={submitSong}>
                        Submit Song
                    </div>

                </div>

            </div>


        </div>
    );
};


export default UploadSongs;
