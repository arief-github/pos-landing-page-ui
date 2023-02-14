import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.backgroundcolor || '#333' };
    color: ${props => props.color || '#fff'};
    width: 168px;
    cursor: pointer;
    height: 39px;
    border-radius: 8px;
    padding:9px;
    border: 2px solid ${props => props.bordercolor || '#fff'};
    transition: all 0.3s ease;
`;

export default Button;