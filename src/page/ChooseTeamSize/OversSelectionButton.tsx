import { teamSize } from "@/lib/constants";


interface OverSelectionProps {
    buttonClickedId: number;
    buttonClicked: boolean;
    clickHandler: (size: number) => void;
}

const OversSelectionButton: React.FC<OverSelectionProps> = ({ buttonClickedId, buttonClicked, clickHandler }) => {
    return (
        <>
            {teamSize.map((item) => (
                <button
                    key={item.id}
                    className={`button-select ${buttonClicked && buttonClickedId === item.size ? "text-black !border-zomato_red !border-2" : " "}`}
                    onClick={() => clickHandler(item.size)}
                >
                    {item.size}
                </button>
            ))}
        </>
    )
}

export default OversSelectionButton