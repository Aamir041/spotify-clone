import { Icon } from "@iconify/react";

const IconText = ({iconName,displayText,active}) => {
    return(
        <div className={`flex ${active ? "text-white" : "text-gray-400"} items-center justify-start cursor-pointer hover:text-white`}>
            
            <div className="px-5 py-2">
                <Icon icon={iconName} fontSize={25}/>
            </div>
            <div className=" text-lg font-semibold">
                {displayText}
            </div>
        </div>
    )
}

export default IconText;