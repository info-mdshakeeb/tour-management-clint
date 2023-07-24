import Link from "next/link"

export const PrimaryButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`bg-primary text-white px-4 py-2 rounded-md ${className}`}>
                    {children}
                </Link> :
                <button
                    disabled
                    className=" btn btn-warn ">
                    {children}
                </button>
            }
        </>
    )
}

export const SvgButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`bg-primary text-white px-4 py-2 rounded-md ${className}`}>
                    {children}
                </Link> :
                <button
                    disabled
                    className=" btn btn-warn ">
                    {children}
                </button>
            }
        </>
    )
}