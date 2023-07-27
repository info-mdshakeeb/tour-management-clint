import Container from "@/components/ui/Container";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";



const page = async () => {


    const res = await fetch('https://iconic-server-v2.vercel.app/api/v2/cart?email=admin@iconic.com')
    const cartDates = await res.json()



    return (
        <div className="bg-base-100 min-h-[calc(100vh_-_280px)]">

            <Container className="py-5 ">
                <div className="">
                    <p className='text-2xl font-[400] mb-5'>Orders : </p>
                    <div>
                        <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                            <div className='my-3 p-2 grid md:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                                <span>items</span>
                                <span className='hidden md:grid'>price & Quantity</span>
                                <span className='hidden md:grid'>Subtotal</span>
                                <span className='sm:text-left text-left'>Action</span>
                            </div>
                            <ul>
                                {cartDates?.data?.map((item, i) =>
                                    <li key={i} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>

                                        <div className="flex items-center space-x-2">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <img src={item?.image} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item?.name}
                                                </div>
                                                <div className="text-sm opacity-50">{item?.shop} type :{item?.variants}</div>
                                            </div>
                                        </div>

                                        <p className='hidden md:flex'>{item?.price} - ({item?.amount})</p>
                                        <span className='hidden md:flex'>
                                            {item?.price * item?.amount}
                                        </span>
                                        <div className='flex  items-center justify-between'>
                                            <label
                                                // onClick={() => removeItem(item?.id)}
                                                htmlFor="confirmation-modal" className="btn btn-warning btn-xs ml-3 lg:ml-0"> x</label>
                                            <label
                                                // onClick={() => setProduct(item)}
                                                htmlFor="my-modal-3" className='btn btn-sm btn-warning'>PAY</label>
                                            <BsThreeDotsVertical />
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <div className="">
                                <li className=' rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="hidden md:flex items-center space-x-2">
                                        <Link className='btn btn-sm btn-primary mt-2' href={`/tours`}>BacK to Tours</Link>
                                    </div>
                                    <p className='hidden md:flex '>Total :1000</p>
                                    <span className='flex lg:-ml-12'>
                                        Total : 111
                                    </span>
                                    <div className='flex items-center justify-between'>

                                        <Link href={`/dashboard/orders/payment-history`}
                                            className='btn btn-sm btn-warning ml-6'>Payment history</Link>
                                    </div>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;