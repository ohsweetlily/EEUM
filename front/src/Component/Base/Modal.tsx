import React, { PropsWithChildren } from "react";
import DaumPost from "./DaumPostCode";
import * as SC from "./ModalSC";

interface Props {
    onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<Props>) {
    return (
        <SC.ModalContainer>
            <SC.DialogBox>
                {children}
                <DaumPost />
            </SC.DialogBox>
            <SC.Backdrop
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                }}
            />
        </SC.ModalContainer>
    );
}

export default Modal;
