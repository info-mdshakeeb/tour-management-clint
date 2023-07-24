export const Title = ({ children, className }) => {
    return (
        <h1 className={` text-[#0b2727] ${className}`}>
            {children}
        </h1>
    )
}
export const Subtitle = ({ children, className }) => {
    return (
        <h2 className={`bg-[#faa935] px-[0.5rem] pr-1 rounded-[50px] font-[1.7rem] text-[#0b2727] ${className}`}>
            {children}
        </h2>
    )
}
export const Paragraph = ({ children, className }) => {
    return (
        <p className={`${className} text-[#0b2727]`}>
            {children}
        </p>
    )
}
