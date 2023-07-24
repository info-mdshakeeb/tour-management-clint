'use client'
import { BiLocationPlus } from "react-icons/bi";
import { BsPeopleFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { PrimaryButton } from "../ui/Buttons";
const Search = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const destination = form.destination.value
        const location = form.location.value
        const maxPeople = form.maxPeople.value
        console.log(destination, location, maxPeople)


    }


    return (
        <div className="bg-white border max-w-[600px] py-4 md:py-0 p-2 rounded-3xl mb-3 shadow-xl mt-5 md:mt-0 duration-300">
            <form onSubmit={handleSubmit}>
                <div className=" flex flex-col md:flex-row justify-around items-center w-full gap-4">
                    <div className="flex  items-center gap-x-3">
                        <BiLocationPlus />
                        <div className="flex flex-row gap-x-3 md:flex-col md:gap-x-0">
                            <p>Location</p>
                            <input
                                name="location"
                                required
                                type="text" placeholder="Search" className="md:w-[100px] " />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <BiLocationPlus />
                        <div className="flex flex-row gap-x-3 md:gap-x-0 md:flex-col">
                            <p>Destination</p>
                            <input
                                name="destination"
                                required
                                type="text" placeholder="Search" className="md:w-[100px]" />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <BsPeopleFill className="text-xl" />
                        <div className="flex flex-row gap-x-3 md:gap-x-0 md:flex-col">
                            <p>Max people</p>
                            <input
                                name="maxPeople"
                                required
                                type="number" placeholder="Search" className="md:w-[100px]" />
                        </div>
                    </div>
                    <PrimaryButton link="">
                        <FiSearch />
                    </PrimaryButton>
                </div>
            </form>


        </div>
    );
};

export default Search;