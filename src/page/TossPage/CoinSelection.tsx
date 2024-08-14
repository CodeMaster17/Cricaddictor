import CoinOption from "./CoinOption";

const CoinSelection = ({
    selectedSide,
    isTossDone,
    onSelect,
}: {
    selectedSide: string;
    isTossDone: boolean;
    onSelect: (side: string) => void;
}) => (
    <div className="w-4/5 h-1/5 flex gap-8 mt-8 justify-center items-center shadow-shadow_custom2 rounded-xl">
        <CoinOption
            side="heads"
            selectedSide={selectedSide}
            isTossDone={isTossDone}
            onSelect={onSelect}
        />
        <CoinOption
            side="tails"
            selectedSide={selectedSide}
            isTossDone={isTossDone}
            onSelect={onSelect}
        />
    </div>
);

export default CoinSelection;
