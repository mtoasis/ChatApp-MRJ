import styled from 'styled-components'


export const UserListContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
overflow:scroll;
`

export const UsernameContainer = styled.div`
display:block;
width:95%;
height:35px;
background-color:#f2f2f2;
margin-bottom: 5px;
border-radius:25px;
border: none

    span{
        color:#4DA3E5;
        font-size:20px;
        padding-left:15px;
    }
`