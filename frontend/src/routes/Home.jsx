import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
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
      <div className=" h-full"></div>
    </div>
  );
};

export default HomeComponent;
