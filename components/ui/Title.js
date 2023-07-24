export const Title = ({ children, className }) => {
    return (
        <h1 className={`text-4xl font-bold ${className}`}>
            {children}
        </h1>
    )
}
export const Subtitle = ({ children, className }) => {
    return (
        <h2 className={`text-2xl font-bold ${className}`}>
            {children}
        </h2>
    )
}
export const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-lg ${className}`}>
            {children}
        </p>
    )
}
