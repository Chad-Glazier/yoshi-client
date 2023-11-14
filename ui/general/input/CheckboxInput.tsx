import { Ref, forwardRef, useImperativeHandle } from "react"
import style from "./CheckboxInput.module.css"

type CheckboxInputMethods = {
    value: () => boolean
}

const CheckboxInput = forwardRef(function Input({
    label,
    id,
    defaultValue
}: {
    label: string
    id?: string
    defaultValue: boolean
}, ref: Ref<CheckboxInputMethods>) {
    useImperativeHandle(ref, () => {
        return {
            value: function (): boolean {
                const element = document.getElementById(id ?? label) as HTMLInputElement
                return element.checked
            }
        }
    }, [id])

    return <div
        className={style.container}
    >
        <label
            htmlFor={id ?? label}
        >
            {label}
        </label>
        <input
            type="checkbox"
            id={id ?? label}
            name={label}
            defaultChecked={defaultValue}
        />
    </div>
})

export default CheckboxInput
export type {
    CheckboxInputMethods
}
