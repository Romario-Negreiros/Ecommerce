import { FC, useEffect } from 'react';
import { Container, Summary, Content, Shipping, Info, Alert, Message } from './styles';
import Props from './interfaces/Props';

const Modal: FC<Props> = ({ setShowModal, totalPrice, totalItems }) => {
  useEffect(() => {
    const closeningListener: void =
      window.addEventListener('click', () => {
        setShowModal(false);
      });
    return () => {
      window.removeEventListener('click', closeningListener!);
    };
  });

  const get = new Date();
  const getMinutes: number = get.getMinutes();
  const minutes: string =
    getMinutes < 10 || getMinutes === 1
      ? `0${getMinutes} minute`
      : `${getMinutes} minutes`;
  const fullDate: string = `${get.getMonth()}/${get.getDate()}/${get.getFullYear()} - ${get.getHours()} hours and ${minutes}`;

  return (
    <Container>
      <Summary>
        <Alert>
          <Message>
            Click anywhere on the screen to dismiss this modal
          </Message>
        </Alert>
        <Content>
          <Info>Price: ${totalPrice}</Info>
          <Info>Total items: {totalItems}</Info>
        </Content>
        <Shipping>
          <Info>Payment method: Unknown</Info>
          <Info>Expedition date {fullDate}</Info>
        </Shipping>
      </Summary>
    </Container>
  );
};

export default Modal;
