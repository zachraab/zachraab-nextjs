"use client"

import React, {
    useState,
    useContext,
    cloneElement,
    createContext
} from "react";

import Dialog from '@mui/material/Dialog';
// import { FaWindowClose } from "react-icons/fa";
//import DialogTitle from "@mui/material/DialogTitle";

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

const ModalContext = createContext();

function Modal(props) {
    const [isOpen, setIsOpen] = useState(false);
    return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalDismissButton({ children: child }) {
    const [, setIsOpen] = useContext(ModalContext);
    
    return cloneElement(child, {
        onClick: callAll(() => setIsOpen(false), child.props.onClick)
    });
}

function ModalOpenButton({ children: child }) {
    const [, setIsOpen] = useContext(ModalContext);
    
    return cloneElement(child, {
        onClick: callAll(() => setIsOpen(true), child.props.onClick)
    });
}

function ModalContentsBase(props) {
    const [isOpen, setIsOpen] = useContext(ModalContext);

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
        {props.children}
        </Dialog>
    );
}
    
function ModalContents({ children, darkMode, ...props }) {
    return (
        <ModalContentsBase {...props}>
            <div className="bg-white text-black" >
                <div css={{ display: "flex", justifyContent: "flex-end" }}>
                    <ModalDismissButton>
                        <i
							className="ease-in-out duration-300 hover:bg-black hover:text-white"
							style={{
								position: "absolute",
								top: "0",
								right: "0",
								padding: "5px 10px",
								cursor: "pointer",
								fontSize: "24px",
								fontFamily: "sans-serif",
								fontStyle: "normal",
								lineHeight: "1",
								color: darkMode ? 'white' : ''
							}}
                        >
							x
							{/* <FaWindowClose /> */}
						</i>
                    </ModalDismissButton>
                </div>
                {children}
            </div>
        </ModalContentsBase>
    );
}
        
export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };