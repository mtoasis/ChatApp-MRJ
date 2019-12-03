import React, { useState, Fragment } from 'react'
import { ModalButtonContainer, ModalContainer, ModalHeaderContainer, CloseButtonContainer } from './modal.styles'
import UserNameModal from '../username-modal/username-modal.component'
import GifModal from '../gif-modal/gif-modal.component'
import UserList from '../user-list/user-list.component'


const Modal = ({ changeUserNameStart, isUserNameModal, isGifModal, isUserListModal, size, title, ...props }) => {

    const [modalDisplay, setModalDisplay] = useState(false)

    return (
        <Fragment>
            {modalDisplay ?
                <ModalContainer size={size}>
                    
                    <ModalHeaderContainer>
                        <h3>{title}</h3>
                        <CloseButtonContainer onClick={() => setModalDisplay(false)}>
                            &#10005;
                        </CloseButtonContainer>
                    </ModalHeaderContainer>

                    {isUserNameModal ?
                        <UserNameModal
                            setModalDisplay={setModalDisplay}
                        /> : null}

                    {isGifModal ? <GifModal
                        setModalDisplay={setModalDisplay}
                    /> : null}

                    {isUserListModal ? <UserList
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