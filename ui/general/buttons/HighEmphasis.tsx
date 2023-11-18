import style from "./HighEmphasis.module.css"
import { MouseEvent } from "react"

function HighEmphasis({
    onClick,
    text
}: {
    onClick?: () => void
    text: string
}) {
    return <button
        className={style.button}
        onClick={e => {
            if (onClick) onClick()
        }}
    >
        {text}
    </button>
}

export default HighEmphasis
