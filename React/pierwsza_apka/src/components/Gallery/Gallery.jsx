import React from "react"

export const Gallery = ({children}) => {
    return (
        <div className="flex">{children}</div>
    )
}
Gallery.propTypes = {
    children:React.ReactNode
}