import React from "react"

interface containerChildren {
    children: React.ReactNode
    className?:string
}
export function Container({children, className = ''}:containerChildren){
    return(
        <div className={` container ${className}` }>{children}</div>
    )
}