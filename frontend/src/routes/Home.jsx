import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
const HomeComponent = () => {
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
      <div className=" h-full w-4/5 bg-app-black">

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
              <RightNavBttn displayText={"Sign Up"} />
              {/* Login Buttin */}
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Login
              </div>

            </div>

          </div>
        </div>

        <div className="content p-8">
          <PlaylistView/>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = () => {
  return(
    <div className=" text-white">
      <div className=" text-2xl font-semibold mb-5">Focus</div>
      <div className="w-ful flex justify-between space-x-5">  
        <Card 
          title={"Peaceful Piano"} 
          description={"Relax and indulge with beautiful piano pieces"}
          imgUrl = {"https://i.scdn.co/image/ab67706c0000da84411d41833f74a305492867ee"}
        />
        <Card 
          title={"Deep Focus"} 
          description={"Keep calm and focus with this music"}
          imgUrl={"https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519"}
        />
        <Card 
          title={"Chill Hits"} 
          description={"Kick back to the best new and recent chill hits"}
          imgUrl={"https://i.scdn.co/image/ab67706f00000002fb216d1ce13d5a4952a6180e"}
        />
        <Card 
          title={"Focus Flow"} 
          description={"Uptempo instrumental hip hop beats"}
          imgUrl={"https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc"}
        />
        <Card 
          title={"Workday Lounge"} 
          description={"Lounge and chill out music for your workday"}
          imgUrl={"https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618"}
        />


      </div>
    </div>
  )
}

const Card = ({title,description,imgUrl}) => {
  return(
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="py-4">
        <img className="w-full" src={imgUrl}/>
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className=" text-gray-400">{description}</div>
    </div>
  )
}

export default HomeComponent;
