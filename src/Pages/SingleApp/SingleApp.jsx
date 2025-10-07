import { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const SingleApp = ({app}) => {
    const {image, title, companyName, downloads, ratingAvg} = app;
    
    return (
       <div className="card bg-base-100 w-[348px] h-[445px] shadow-sm flex-1">
  <figure className=" w-[300px] h-[316px] mx-auto bg-cover p-2 rounded-xl">
    <img className="rounded-xl"
      src={image}
      alt="apps" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}: {companyName}</h2>
    <div className="flex justify-between m-2">
        <span className="btn text-[16px] text-[#00D390] bg-gray-100 border-none rounded-xl"><FaArrowDown className="text-[#00D390]"/>{downloads}</span>
        <span className="btn text-orange-500 bg-orange-100 border-none rounded-xl"><FaStar />{ratingAvg}</span>
    </div>
     
    </div>
  </div>

    );
};

export default SingleApp;