'use client'

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Comment = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        const review = { rating, comment }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="flex items-center gap-4">
                <div className="text-xl font-bold">
                    <p>Rate this tour</p>
                </div>
                <div className="flex">
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i} className="">
                                <input
                                    className="hidden"
                                    required
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    className="duration-300"
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={20}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
                <input
                    name="comment"
                    required
                    maxLength={50}
                    className="textarea textarea-bordered w-full" placeholder="Your thought"></input>
                <button className="btn btn-primary ">Submit</button>
            </div>
        </form>
    );
};

export default Comment;
