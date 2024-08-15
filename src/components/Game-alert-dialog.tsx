import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";

interface GameAlertDialogProps {
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
    title: string;
    description: string;
    actionText: string;
    onActionClick: () => void;
}

const GameAlertDialog: React.FC<GameAlertDialogProps> = ({ open, onOpenChange, title, description, actionText, onActionClick }) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-2xl'>{title}</AlertDialogTitle>
                    <AlertDialogDescription className='text-lg'>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className='bg-zomato_red text-white text-lg' onClick={onActionClick}>{actionText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GameAlertDialog;
