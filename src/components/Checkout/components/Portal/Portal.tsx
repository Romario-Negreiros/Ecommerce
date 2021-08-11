import { createPortal } from 'react-dom';
import { FC } from 'react';

const Portal: FC = ({ children }) => {
    const portal = document.querySelector('#modal') as HTMLDivElement

    return createPortal(children, portal)
}

export default Portal;