import tours from "@/assets/data/tours";
import StarRatingForm from "@/components/Comment/Comment";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";


const page = ({ params }) => {


    const tour = tours.find(t => t.id === params.id)


    return (
        <div className="my-10">
            <Container>
                <div className="">
                    <div className=" grid grid-cols-12">
                        <div className="col-span-12 md:col-span-8">
                            <div className="">
                                <figure><Image src={tour?.photo} alt="Shoes" /></figure>
                                <div className=" border mt-4 p-4">
                                    <h2 className="font-bold my-2">{tour?.title}</h2>
                                    <div className="flex  justify-between my-3">
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

                                    <div className="flex items-center justify-between ">
                                        <p className="text-sm"><span className="text-orange-400">{tour?.price}$ </span> /per person</p>
                                        {/* <button className="btn btn-warning btn-xs">book Now</button> */}
                                    </div>
                                    <div className="my-4">
                                        <p className="text-xl font-bold">Description</p>
                                        <p>{tour?.desc}</p>
                                    </div>
                                </div>
                                <div className="my-6 border">
                                    <StarRatingForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;