import styled from 'styled-components'

export const ModalButtonContainer = styled.span`
    padding: 0 0 0 20px;
    font-size:30px;
    color:white;

    &:hover{
        cursor:pointer;
        font-size:32px;
        color: #AEAEAE
    }
`

export const ModalContainer = styled.div`
    background-color:#f2f2f2;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    width:${({ size }) => size === 'large' ? `250px` : `200px`};
    height: ${({ size }) => size === 'large' ? `500px` : `240px`};
    background-color:white;
    box-shadow: 0 1px 10px #888888;
    z-index:2;

    input{
        margin: 25px 0; 
    }

`
export const CloseButtonContainer = styled.span`
    font-size:20px;
    top:10px;
    color:black;
    position:absolute;
    right:10px;
            
        &:hover{
            cursor:pointer;
            font-size:20px;
            color: #AEAEAE
            }            
    
`


export const ModalHeaderContainer = styled.div`
    padding-left:20px;
    position:relative;
    display:inherit;
    width:100%;
    height:40px;
    margin-bottom:15px;
`