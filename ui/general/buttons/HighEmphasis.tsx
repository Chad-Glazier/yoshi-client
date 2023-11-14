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
        onClick={e => {
            if (onClick) onClick()
        }}
    >
        high!
    </button>
}

export default HighEmphasis
