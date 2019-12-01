import React, { Fragment } from 'react'
import { IoIosPeople, IoIosSettings } from 'react-icons/io'
import { MdGif } from 'react-icons/md'
import { HeaderContainer } from './header.styles'
import Modal from '../modal/modal.component'

const Header = ({ isLoading }) => (
    <HeaderContainer>
        {
            isLoading ?                
                <Fragment>
                    <Modal
                        title="Change Username"
                        isUserNameModal
                    >
                        <IoIosSettings />
                    </Modal>

                    <Modal
                        title="Fun GIFs!"
                        isGifModal
                        size='large'
                    >
                        <MdGif />
                    </Modal>

                    <Modal
                        title="Active Users"
                        isUserListModal
                        size='large'
                    >
                        <IoIosPeople />
                    </Modal>
                </Fragment>
                :
                null
        }

    </HeaderContainer>
)

export default Header

