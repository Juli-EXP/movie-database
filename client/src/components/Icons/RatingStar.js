import {IconContext} from "react-icons";
import {AiFillStar} from "react-icons/ai";

const RatingStar = () => {
    return (
        <IconContext.Provider value={{color: "#ffff00"}}>
            <AiFillStar/>
        </IconContext.Provider>
    );
};

export default RatingStar;