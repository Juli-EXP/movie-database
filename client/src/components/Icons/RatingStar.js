import {IconContext} from "react-icons";
import {AiFillStar} from "react-icons/ai";

const RatingStar = () => {
    return (
        <div className="mr-0.5 mt-0.5">
            <IconContext.Provider value={{color: "#ffff00"}}>
                <AiFillStar/>
            </IconContext.Provider>
        </div>
    );
};

export default RatingStar;