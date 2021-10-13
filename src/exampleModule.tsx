import React from 'react';
import styled, {keyframes}  from 'styled-components';

const rotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg)
    }
`

const StyledCenter = styled.div`
    display:flex;
    flex-direction:center;
    justify-content:center;
    align-items:'center';
`

const StyledRotatingText = styled.div`
    color:palevioletred;
    display: inline-block;;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size:1.2rem;
    margin:auto;
`

interface Props{
    text:string
}

export const RotatingText = ({text}:Props)=>{
    return(
        <StyledCenter>
            <StyledRotatingText>{text}</StyledRotatingText>
        </StyledCenter>             
    )
}
