import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightToLine } from 'lucide-react';
interface NextButtonProps {
    navigateLink: (navigate: (path: string) => void) => void
    text: string

}

const NextButton: React.FC<NextButtonProps> = ({ text, navigateLink }) => {
    const navigate = useNavigate()
    return (
        <button className="button-custom !w-[90%] text-xl"
            onClick={() => navigateLink(navigate)}>
            {text} &nbsp; <ArrowRightToLine />
        </button>
    )
}

export default NextButton