import React, { Fragment } from "react";
import {
  UserNameContainer,
  ChatMessageContainer,
  MessageContainer,
  GifImageContainer,
  SystemMessageContainer
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
      <Fragment>
        <UserNameContainer>
          <span>
            {from.slice(0, 10)} {from.length > 10 ? `..` : null}
          </span>
        </UserNameContainer>

        <Fragment>
          {url ?
            <GifImageContainer>
              <img alt="gif" src={url} />
            </GifImageContainer>
            :
            <MessageContainer
              userId={userId}
              ownUserId={ownUserId}
            >
              <span>{msg}</span>
            </MessageContainer>
          }
        </Fragment>
      </Fragment>
    }


  </ChatMessageContainer>
);

const mapStateToProps = createStructuredSelector({
  ownUserId: selectUserId
})

export default connect(mapStateToProps)(ChatMessage);
