import styled from 'styled-components'

const userMessageColor = "#ffffe6"

const otherMessageColor ="#AEDAFE"

export const ChatMessageContainer = styled.div`
display:flex;
padding: 5px 0;
justify-content:${({from})=>from === "Main Server"? "center": null};
flex-direction: ${({userId, ownUserId})=> userId === ownUserId? "row-reverse": "row"};
`

export const UserNameContainer = styled.div`
padding:0 10px;

span{
    font-size:12px
}
`
export const GifImageContainer = styled.div`

img{
    width:100px;
    height:100px;
};
`

export const MessageContainer = styled.div`
min-width:150px;
min-height:30px;
background-Color:${({userId, ownUserId})=> userId === ownUserId? userMessageColor: otherMessageColor};
padding: 0 3px;
border: 0;
border-radius:10px

span{
    font-size:13px;
    padding:5px;
}
`
export const SystemMessageContainer = styled.div`
color:grey;
font-size:9px;
justify-content: center;
`