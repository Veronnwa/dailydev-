import React from 'react'
import styled from 'styled-components';

export const GlobalButton = ({name, bg}) => {
    return (
        <Container bg={bg}>
            <Button>
                {name}
            </Button>
        </Container>
    );
};

export default GlobalButton;

const Container = styled.div`
background-color: ${({bg})=> (bg ? "yellow" : "#175979")};
width: 120px;
height: 50px;
margin: 10px;
border-radius: 5px;
transition: all 350ms;
transform: scale(1);
font-size: 13px;
 

:hover {
{//* background-color: ${({bg})=> (bg ? "#175979" : "red")}; */ }
    cursor: pointer;
    transform: scale(1.05);
}
`;


const Button = styled.div`
width: 120px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: ${({cl}) =>(cl ? "white" : "black")};
`