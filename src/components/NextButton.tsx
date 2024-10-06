import { ArrowRightToLine } from 'lucide-react';
import React from 'react';
interface NextButtonProps {
    onClickHandler?: () => void
    text: string
    disabled?: boolean,
    type: "button" | "submit" | "reset"

}

const NextButton: React.FC<NextButtonProps> = ({ text, onClickHandler, disabled = false, type = "button" }) => {

    return (
        <button disabled={disabled} type={type} className="button-custom !w-[90%] text-xl"
            onClick={onClickHandler}>
            {text} &nbsp; <ArrowRightToLine />
        </button>
    )
}

export default NextButton