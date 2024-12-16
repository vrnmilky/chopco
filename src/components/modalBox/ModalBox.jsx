import React from 'react';
import './modalBox.css';

const ModalBox = ({ setModalBox, children }) => {
    return (
        <>
            <div className="echo" onClick={() => setModalBox('none')}></div>
            <div className="modalBox">
                {React.cloneElement(children, { setModalBox })}
            </div>
        </>
    );
}

export default ModalBox;