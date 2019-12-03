import React from "react";
import {
  UserNameContainer,
  ChatMessageContainer,
  MessageContainer,
  SystemMessageContainer,
  InnerMessageContainer
} from "./chat-message.styles";

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserId } from '../../redux/user/user.selectors'

const ChatMessage = ({ allchats: { from, msg, url, userId }, ownUserId }) => (
  <ChatMessageContainer
    from={from}
    userId={userId}
    ownUserId={ownUserId}
  >
    {from === "Main Server" ?
      <SystemMessageContainer>{msg}</SystemMessageContainer>
      :
      <InnerMessageContainer>
        <UserNameContainer
          userId={userId}
          ownUserId={ownUserId}
        >
          <span>
            {from.slice(0, 10)} {from.length > 10 ? `..` : null}
          </span>
        </UserNameContainer>
        <br />
        <MessageContainer
          userId={userId}
          ownUserId={ownUserId}
        >
          {url ?
            <img alt="gif" src={url} />
            :
            <span>{msg}</span>
          }
        </MessageContainer>
      </InnerMessageContainer>
    }


  </ChatMessageContainer>
);

const mapStateToProps = createStructuredSelector({
  ownUserId: selectUserId
})

export default connect(mapStateToProps)(ChatMessage);
