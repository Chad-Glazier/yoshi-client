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
        onClick={e => {
            if (onClick) onClick()
        }}
    >
        Low!
    </button>
}

export default LowEmphasis
