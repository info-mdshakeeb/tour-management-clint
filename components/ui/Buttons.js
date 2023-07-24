import Link from "next/link"

export const PrimaryButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`btn btn-sm hover:scale-105 hover:bg-[#faa935] duration-300 text-white font-[1.1rem] py-[0.4rem] px-[1.5rem] bg-[#faa935] border-none rounded-[50px] lowercase ${className}`}>
                    {children}
                </Link> :
                <button
                    disabled
                    className="btn btn-sm  lowercase">
                    {children}
                </button>
            }
        </>
    )
}

export const SecondaryButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`bg-transparent font-[500] border-none ${className}`}>
                    <label className="text-[1.1rem] text-[#0b2727]" > {children}</label>
                </Link> :
                <button
                    disabled
                    className=" btn btn-sm ">
                    {children}
                </button>
            }
        </>
    )
}