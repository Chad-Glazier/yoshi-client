import LowEmphasis from "./LowEmphasis"
import MediumEmphasis from "./MediumEmphasis"
import HighEmphasis from "./HighEmphasis"

function Button({
    emphasis,
    text,
    onClick
}: {
    emphasis?: "low" | "medium" | "high"
    text: string
    onClick?: () => void
}) {
    switch (emphasis) {
    case "low": 
        return <LowEmphasis onClick={onClick} text={text} />
    case "high":
        return <HighEmphasis onClick={onClick} text={text} />
    default:
        return <MediumEmphasis onClick={onClick} text={text} />
    }
}

export default Button
