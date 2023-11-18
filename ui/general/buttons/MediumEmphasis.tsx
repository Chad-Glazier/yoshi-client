import style from "./MediumEmphasis.module.css"
import { MouseEvent } from "react"

function MediumEmphasis({
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

export default MediumEmphasis
