import styled from 'styled-components';

const Button = styled.button`
    height: 60px;
    border: 2px solid black;
    min-width: 300px;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        color: #ffffff;
    }
`;

export default Button;
