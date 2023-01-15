import { ReactNode } from "react"

interface iListProps {
    children: ReactNode
}

const List = ( { children } : iListProps ) => {

    return (
        <ul>
            {children}
        </ul>
    )
}

export default List

