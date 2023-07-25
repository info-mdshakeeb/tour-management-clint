'use client'
import { AiOutlineStar } from "react-icons/ai";

const Booking = ({ tour }) => {

    return (
        <div className="col-span-12 md:col-span-4 sticky top-16 max-h-[460px] ">
            <div className="p-4 border">
                <div className="flex items-center justify-between ">
                    <p className="text-md"><span className="text-orange-400 text-2xl font-bold">{tour?.price}$ </span> /per person</p>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <AiOutlineStar className="text-yellow-500" /></div>
                        {tour?.reviews.length === 0 ? <p>No reviews</p> : <p>{tour?.avgRating} ({tour?.reviews.length}) </p>}
                    </div>
                </div>
                <hr className="my-5" />

                <div className="">
                    <h1 className="text-md font-bold">
                        Information
                    </h1>
                    <div className="border p-4 flex flex-col gap-4 mt-2">
                        <input required maxLength={30} placeholder="Name" name="name" type="text" className="w-full outline-none border-b" />
                        <input required maxLength={30} placeholder="Phone Number" name="phone" type="number" className="w-full outline-none border-b" />
                        <div className="flex gap-2">
                            <input required maxLength={30} placeholder="Date" name="date" type="date" className="w-full outline-none border-b" />
                            <input

                                required maxLength={3} placeholder="Person" name="person" type="number" className="w-full outline-none border-b" />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <span className="text-orange-400  font-bold">$  {tour?.price}</span>
                                * <span className="text-orange-400  font-bold">1 person </span>
                            </div>
                            <span className="text-orange-400  ">{tour?.price}$ </span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <p>Services charge</p>
                            </div>
                            <span className="text-orange-400  ">{tour?.price}$ </span>
                        </div>
                        <hr />
                        <div className="flex justify-between">

                            <div className="flex gap-2">
                                <p>Total</p>
                            </div>
                            <span className="text-orange-400 ">{tour?.price}$ </span>
                        </div>
                    </div>
                </div>
                <button className="btn btn-warning w-full mt-4 btn-sm">book Now</button>
            </div>

        </div>
    );
};

export default Booking;