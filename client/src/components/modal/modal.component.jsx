import React, { useState, Fragment } from 'react'
import { ModalButtonContainer, ModalContainer, ModalHeaderContainer } from './modal.styles'
import UserNameModal from '../username-modal/username-modal.component'
import GifModal from '../gif-modal/gif-modal.component'
import UserListModal from '../user-list-modal/user-list-modal.component'

const Modal = ({ changeUserNameStart, isUserNameModal, isGifModal, isUserListModal, size, title, ...props }) => {

    const [modalDisplay, setModalDisplay] = useState(false)

    return (
        <Fragment>
            {modalDisplay ?
                <ModalContainer size={size}>
                    
                    <ModalHeaderContainer>
                        <h3>{title}</h3>
                        <span onClick={() => setModalDisplay(false)}>
                            &#10005;
                        </span>
                    </ModalHeaderContainer>

                    {isUserNameModal ?
                        <UserNameModal
                            setModalDisplay={setModalDisplay}
                        /> : null}

                    {isGifModal ? <GifModal
                        setModalDisplay={setModalDisplay}
                    /> : null}

                    {isUserListModal ? <UserListModal
                        setModalDisplay={setModalDisplay}
                    /> : null}

                </ModalContainer>
                :
                <ModalButtonContainer onClick={() => setModalDisplay(true)}>
                    {props.children}
                </ModalButtonContainer>}

        </Fragment>

    )
}

export default Modal