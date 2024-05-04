import { FaArrowRight } from "react-icons/fa";


const Service = ({ data }) => {
    console.log(data)
    const { img, title, price } = data
    return (
        <div className=" p-6 rounded-md  border-[1px]  border-[#E8E8E8] text-gray-900">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">

                <h2 className="text-2xl font-bold text-gray-700 tracking-wide">{title}</h2>
            </div>
            <div className="text-xl font-semibold text-primary flex justify-between">
                <p className=" ">Price : ${price}</p>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default Service;