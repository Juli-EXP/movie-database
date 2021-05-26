import {IconContext} from "react-icons";
import {AiFillStar} from "react-icons/ai";


const RatingStar = ({className}) => {
    return (
        <div className={` ${className}`}>
            <IconContext.Provider value={{color: "yellow"}}>
                <AiFillStar/>
            </IconContext.Provider>
        </div>
    );
};

export default RatingStar;