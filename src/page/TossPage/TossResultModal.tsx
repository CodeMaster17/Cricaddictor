import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../../components/ui/alert-dialog";

const TossResultModal = ({
    open,
    onOpenChange,
    resultDescription,
    onNext,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    resultDescription: string;
    onNext: () => void;
}) => (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Toss Result</AlertDialogTitle>
                <AlertDialogDescription>{resultDescription}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction onClick={onNext}>Next</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

export default TossResultModal;
