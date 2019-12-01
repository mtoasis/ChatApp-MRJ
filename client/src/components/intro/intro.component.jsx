import React from 'react'
import { IntroContainer, LogoContainer } from './intro.styles'

import UserNameModal from '../username-modal/username-modal.component'

import {ReactComponent as Logo} from '../../assets/chat.svg'

const Intro = () => {

    return (
        <IntroContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <UserNameModal />
            <h3>
                Please set your username to start
            </h3>
        </IntroContainer>
    )
}

export default Intro