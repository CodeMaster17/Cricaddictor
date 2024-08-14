const CoinOption = ({
    side,
    selectedSide,
    isTossDone,
    onSelect,
}: {
    side: string;
    selectedSide: string;
    isTossDone: boolean;
    onSelect: (side: string) => void;
}) => (
    <button
        className={selectedSide === side ? "card selected-card" : "card"}
        disabled={isTossDone}
        onClick={() => onSelect(side)}
    >
        <p className="text-white text-sm">{side.charAt(0).toUpperCase() + side.slice(1)}</p>
    </button>
);

export default CoinOption;
