import React from 'react'
import styled from 'styled-components';
import img from './main.png';
import GlobalButton from './GlobalButton';

export const Project = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Box>
                        <Title>Best WP Project Bidding Theme – Freelance Marketplace 2021 {" "}
                        </Title>
                        <SubTitle>The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support!{" "}

                          </SubTitle>
                          <Sub>Starting from <span><p>$</p>149</span><GlobalButton name= "see Pricing" />{" "}</Sub>
                        <Button>
                        <GlobalButton  name="View Demo"/>
                        <GlobalButton  name= "Purchase Theme" bg />
                        </Button>
                        </Box>
                    <Image src={img} />
                </Wrapper>
            </Container>
        </div>
    );
};

export default Project;

const Title = styled.h2`
margin: 0;
`
const SubTitle = styled.div``
const Sub = styled.div`
display: flex;
align-items: center;

span{
color: lightgreen;
font-weight: bold;
margin-left;
display: flex;

p{
    margin: 0;
    font-size: 10px;

}
}

`;
const Image = styled.img`
min-width: 320px
width: 480px;
height: 450px;
min-height:360px;
margin: 20px;
color: black;
object-fit: contain;
`;

const Button = styled.div`
width: 320px;
height: 400px;
color: black;
margin: 20px;
display: flex;
`;

const Box = styled.div`
width: 320px;
height: 400px;
color: white;
margin: 20px;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url("background.jpeg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;