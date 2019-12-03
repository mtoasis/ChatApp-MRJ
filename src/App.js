import React, { Fragment } from 'react';
import { AppContainer } from './App.styles.js'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentuser } from './redux/user/user.selectors'

import Intro from './components/intro/intro.component'
import Header from './components/header/header.component'
import MessageWindow from './components/message-window/message-window.component'
import ChatInputBox from './components/chat-inputbox/chat-inputbox.component'
import SocketHidden from './components/socket-hidden/socket-hidden.component'


function App({ currentUser }) {

  return (
    <AppContainer>
      <SocketHidden />
      <Header isLoading={currentUser}/>
      {
        currentUser ?
          <Fragment>
            <MessageWindow />
            <ChatInputBox />
          </Fragment> :
          <Intro />
      }
    </AppContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
})

export default connect(mapStateToProps)(App);
