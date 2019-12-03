import styled from 'styled-components'

const userMessageColor = "#ffffe6"

const otherMessageColor ="#AEDAFE"

export const ChatMessageContainer = styled.div`
display:flex;
flex-direction:column;
padding: 5px 0.7vw;
justify-content:${({from})=>from === "Main Server"? "center": null};
flex-direction: ${({userId, ownUserId})=> userId === ownUserId? "row-reverse": "row"};
`

export const InnerMessageContainer = styled.div`
display:flex;
flex-direction:column;
`

export const UserNameContainer = styled.div`
display:flex;
flex-direction: ${({userId, ownUserId})=> userId === ownUserId? "row-reverse": "row"};
padding:0 10px;
margin-bottom:-20px;

span{
    font-size:10px
}
`
export const MessageContainer = styled.div`
display:flex;
min-width:150px;
max-width:15vw;
min-height:30px;
background-Color:${({userId, ownUserId})=> userId === ownUserId? userMessageColor: otherMessageColor};
padding: 0 3px;
border: 0;
border-radius:10px

span{
    font-size:13px;
    padding:5px;
}

img{
    width:100px;
    height:100px;
};
`
export const SystemMessageContainer = styled.div`
color:grey;
font-size:9px;
justify-content: center;
`