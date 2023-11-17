import { ReactNode } from "react"
import style from "./A.module.css"
import Link from "next/link"

function A({
    unstyled = false,
    href,
    children
}: {
    unstyled?: boolean
    href: string
    children: ReactNode
}) {
    return <Link 
        className={unstyled ? "" : style.link}
        target={href.startsWith("http") ? "_blank" : ""} 
        href={href}
    >
        {children}
        {!unstyled && href.startsWith("http") ? 
            <span 
                className={style.icon + " material-symbols-outlined"}
            >
                arrow_outward
            </span> 
            : ""
        }
    </Link>
}

export default A
