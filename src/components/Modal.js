import {useState} from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5)
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);
  let i;

  return (
    <>
    <button onClick={()=> setShouldShow(true)}>Show Modal Button</button>
    {shouldShow && (
    <ModalBackground onClick={()=>setShouldShow(false)}>
      {/* stop propagation prevents bubbling up action of the close */}
      <ModalBody onClick={event.stopPropagation()}>
        <button onClick={()=> setShouldShow(false)}>hide modal</button>
        {children}
      </ModalBody>
    </ModalBackground>
    )}
    </>
  );
}