import './modalBox.css';
import React from 'react';

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