import style from "./StringInput.module.css"
import { Ref, forwardRef, useImperativeHandle } from "react"

type StringInputMethods = {
    clear: () => void
    value: () => string
}

type StringInputTypes = "password" | "email" | "text"

const StringInput = forwardRef(function Input({
    type = "text",
    label,
    id,
    required = true
}: {
    label: string
    id?: string
    type?: StringInputTypes
    required?: boolean
}, ref: Ref<StringInputMethods>) {
    useImperativeHandle(ref, () => { return {
        clear: function() {
            const element = document.getElementById(id ?? label) as HTMLInputElement
            element.value = ""
        },
        value: function(): string {
            const element = document.getElementById(id ?? label) as HTMLInputElement
            return element.value
        }
    }}, [id])

    return <div
        className={style.container}
    >
        <label 
            htmlFor={id ?? label}
            className={style.label}
        >
            {label}
        </label>
        <input 
            required={required}
            type={type}
            name={label}
            id={id ?? label}
            className={style.input}
        />        
    </div>
})

export default StringInput
export type {
    StringInputMethods,
    StringInputTypes
}
