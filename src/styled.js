import styled from "styled-components";

export const Cover = styled.h1`
    color:${props => `${props.titleColor}`};
    font-size: ${props => `${props.pSize}`};
    background-color:${props => `${props.background}`};
`

export const Content = styled.h1`
    color:${props => `${props.txtColor}`};
    font-size: ${props => `${props.size}`};
    background-color:${props => `${props.background}`};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
