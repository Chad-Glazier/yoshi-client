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
        onClick={e => {
            if (onClick) onClick()
        }}
    >
        Medium!
    </button>
}

export default MediumEmphasis
