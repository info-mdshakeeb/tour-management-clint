import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Card = ({ tour }) => {

    return (
        <Link href={`/tours/${tour?.id}`} className=" hover:scale-95 ease-out duration-300">
            <div className="card card-compact  bg-base-100 shadow-xl rounded-md">
                <div className="relative">
                    <figure><Image src={tour?.photo} alt="Shoes" /></figure>
                    <div className="absolute  right-0 top-[148px]">{tour?.featured && <span className=" bg-yellow-500 text-white px-1">Featured</span>}</div>
                </div>
                <div className="card-body">
                    <div className="flex  justify-between">
                        <div className="flex items-center gap-2">
                            <p><GrLocation /></p>
                            <p>{tour?.city}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="">
                                <AiOutlineStar className="text-yellow-500" /></div>
                            {tour?.reviews.length === 0 ? <p>No reviews</p> : <p>{tour?.avgRating} ({tour?.reviews.length}) </p>}

                        </div>
                    </div>
                    <h2 className="font-bold my-2">{tour?.title}</h2>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm">{tour?.price} /per person</p>
                        <button className="btn btn-warning btn-xs">book Now</button>
                    </div>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default Card;