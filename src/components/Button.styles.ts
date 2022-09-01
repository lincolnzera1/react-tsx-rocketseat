import styled from 'styled-components';

export type ButtonCor = "primary" | "secondary" |"danger" | "success";

interface ButtonContainerProps {
    cor: ButtonCor;
}

const buttonCores = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme.primary};

    /* ${props => {
        return `background-color: ${buttonCores[props.cor]}`
    }} */
`