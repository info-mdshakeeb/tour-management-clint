'use client'
import { useGetCartQuery } from "@/redux/feature/cart/cartApi";
import Link from "next/link";
import { PrimaryLoading } from "../ui/Loading";

const NavAddToCart = () => {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    const { data, isLoading } = useGetCartQuery(userId)
    console.log(data?.data);
    return (
        <div className="dropdown">
            {isLoading ? <PrimaryLoading /> : <>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{data?.data.length}</span>
                    </div>
                </label>
                <div tabIndex={0} className="mt-3  dropdown-content w-52 bg-base-100 shadow ">
                    <div className="shadow-md bg-orange-100 text-black">
                        <div className="p-3 flex gap-2 items-center">
                            <span className="font-bold text-lg">{data?.data.length} </span>
                            <span className="">total: 100 tk</span>
                        </div>
                        {/* {data?.data  <div className="">

                        </div>} */}
                        <div className="card-actions">
                            <Link href='/orders' className="btn btn-primary btn-block btn-sm rounded-none">View cart</Link>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default NavAddToCart;