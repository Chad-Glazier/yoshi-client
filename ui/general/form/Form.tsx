import { ReactNode } from "react"
import style from "./Form.module.css"

function Form({
    onSubmit,
    children
}: {
    onSubmit?: () => void
    children: ReactNode
}) {
    return <form
        onSubmit={e => {
            e.preventDefault()
            if (onSubmit) onSubmit()
        }}
    >
        {children}
    </form>
}

export default Form
