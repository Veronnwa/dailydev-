import React from 'react'
import {Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineSetting, AiOutlineFlag, AiOutlineContacts} from "react-icons/ai";
import Img from '../githubImage/twit.jpg'
import {FcServices} from "react-icons/fc";



export const HeaderNav = () => {
    return (
       <Container>
           <Wrapper>
           <Logo src={Img} />
           <NavLink>
               <MyLink to="/"><AiOutlineHome /></MyLink>
               <MyLink to="/Landingpage"><AiOutlineSetting /></MyLink>
               <MyLink to="/project" clr><AiOutlineFlag /></MyLink>
               <MyLink to="/GameScreen"><AiOutlineContacts /></MyLink>
               <MyLink to="/github"><FcServices /></MyLink>
           </NavLink>
           </Wrapper>
       </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 80px;
background-color: white;
color: black;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;`

const Logo = styled.img`
width: 200px;
height: 50px;
background-color: whitezs;
object-fit: contain;
`
const NavLink = styled.div`
display: flex;`


const MyLink = styled(Link)`
margin: 0 10px;
width: 80px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
transition: all 350ms;
background-color: rgba(0,0,0,0.1);
text-decoration: none;
color: ${({clr})=>(clr ? "red":"black")};

:hover {
    background-color: teal;
    color: white;
    font-size: 30px;
    
}
`