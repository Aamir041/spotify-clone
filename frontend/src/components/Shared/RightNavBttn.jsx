import { Icon } from "@iconify/react";

const RightNavBttn = ({ displayText, active }) => {
    return (
        <div className={`flex ${active ? "text-white" : "text-gray-400"} items-center justify-start cursor-pointer hover:text-white`}>
            <div
                className=" text-lg font-semibold"
            >
                {displayText}
            </div>
        </div>
    )
}

export default RightNavBttn;