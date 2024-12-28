import { teamSize } from "@/lib/constants";


interface OverSelectionProps {
    buttonClickedId: number;
    buttonClicked: boolean;
    clickHandler: (size: number) => void;
}

const TeamSelectionButton: React.FC<OverSelectionProps> = ({ buttonClickedId, buttonClicked, clickHandler }) => {
    return (
        <>
            {teamSize.map((item) => (
                <button
                    key={item.id}
                    onClick={() => clickHandler(item.size)}
                    className={`button-select ${buttonClicked && buttonClickedId === item.size ? "text-black !bg-[#ef7c7c] !border-[#4eea9c]" : " !bg-white"}`}
                >
                    {item.size}
                </button>
            ))}
        </>
    )
}

export default TeamSelectionButton