import style from "./LowEmphasis.module.css"
import { MouseEvent } from "react"

function LowEmphasis({
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

export default LowEmphasis
