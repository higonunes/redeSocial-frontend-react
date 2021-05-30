import React, { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

interface modalProps {
  open: boolean;
  changeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalPost: React.FC<modalProps> = (props: modalProps) => {
  return (
    <div>
      <Modal
        isOpen={props.open}
        onRequestClose={() => props.changeModal(false)}
        contentLabel="Novo Post"
      >
        <Container>
          <Header>
            <h2>Novo Post</h2>
            <button onClick={() => props.changeModal(false)}>close</button>
          </Header>

          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalPost;
