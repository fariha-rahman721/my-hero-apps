import { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleApp = ({app}) => {
    const {id, image, title, companyName, downloads, ratingAvg} = app;
    
    return (
       <Link to={`/appDetails/${id}`}>
       <div className="card bg-base-100 w-[348px] h-[445px] mx-auto shadow-sm flex-1 transform transition-transform hover:scale-105">
  <figure className=" w-[280px] h-[300px] mx-auto bg-cover p-2 rounded-xl">
    <img className="rounded-xl"
      src={image}
      alt="apps" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}: {companyName}</h2>
    <div className="flex justify-between m-1">
        <span className="btn text-[16px] text-[#00D390] bg-gray-100 border-none rounded-xl"><FaArrowDown className="text-[#00D390]"/>{downloads}</span>
        <span className="btn text-orange-500 bg-orange-100 border-none rounded-xl"><FaStar />{ratingAvg}</span>
    </div>
     
    </div>
  </div>
       </Link>

    );
};

export default SingleApp;