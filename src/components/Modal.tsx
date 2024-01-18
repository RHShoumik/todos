import CancelIcon from '@/assets/CancelIcon';
import React from 'react';
interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    closeIcon?: boolean;
    onClose?: () => void;
}
const Modal = ({ isOpen, onClose, children, closeIcon }: ModalProps) => {
    return (
        <div className={`fixed top-0 z-100 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="fixed w-full h-full bg-gray-800 opacity-50" onClick={onClose}></div>
            <div className="relative bg-light-body dark:bg-dark-body p-6 rounded-lg z-10">
                {closeIcon &&
                    <div className="absolute top-2 right-2">
                        <button onClick={onClose}>
                            <CancelIcon />
                        </button>
                    </div>}
                {children}
            </div>
        </div>
    );
};

export default Modal