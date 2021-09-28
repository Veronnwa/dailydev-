import React from 'react'
import Icon from './githubImage/logo.svg'
import styled from 'styled-components'

const topHeader = ({clr}) => {
    return (
        <Container>
            <Wrapper>
                <Logo src= {Icon}/>
                <Linked>
                <Links> Overview</Links>
                <Links clr>Release Note</Links>
                <Links clr>Help</Links>
                </Linked>
            </Wrapper>
        </Container>
    )
}

export default topHeader

const Container = styled.div`
width: 100%;
height: 70vh;
background-color: #24292e;
background-image:url('background.svg');
background-size: cover;
background-position: center;
`;
const Wrapper = styled.div`
padding: 20px 0;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
const Logo = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
margin-top: 20px;
object-fit: cover;
`;
const  Links = styled.div`
margin: 0 20px;
font-weight: bold;
color: ${({clr}) =>(clr ? '#9F7BE1' : 'white')};
cursor: pointer; 

:hover{
text-decoration: underline;
}
`;
const Linked = styled.div`
display: flex;
`;

