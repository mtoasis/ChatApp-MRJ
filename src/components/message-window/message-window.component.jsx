import React from 'react'
import { MessageWindowContainer } from './message-window.styles'
import axios from 'axios'
import ChatMessage from '../chat-message/chat-message.component'
import {socket} from '../../socket-io/socket-io.utils'

class MessageWindow extends React.Component{

    constructor(){
        super()
        this.state={
            chatHistory: [],
        }
        this.endMessage = React.createRef(); 
        //creating Ref point for the autoScroll to bottom
    }

    componentDidMount(){
        this.initializing()        
    } 

    scrollToBottom = ()=>{
        this.endMessage.current.scrollIntoView()
    }

    initializing = async () => {
        const { data } = await axios.get('http://chatapp-mrj.herokuapp.com/init')
        this.setState({chatHistory: data, test:data})
        this.scrollToBottom()
        this.receiveMessage()                 
    }

    receiveMessage = ()=>{
        const self = this;
        socket.on('chat message', function (msg) {
            self.setState({chatHistory: [...self.state.chatHistory, {allchats:{...msg}}]})
            self.scrollToBottom()
        })        
    }


    render(){        
        const {chatHistory} = this.state;
        return (
            <MessageWindowContainer>
                {
                    chatHistory.map((element,i) =>
                        <ChatMessage allchats={element.allchats} key={i} />
                    )
                }
                <div ref={this.endMessage} />
            </MessageWindowContainer>)
    } 
}


export default MessageWindow