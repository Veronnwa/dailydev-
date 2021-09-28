import React from 'react';
import styled from 'styled-components';


const HomeMiddle = ({  Img, textHead, textBody, chn }) => {
    return (
        <Container>
       <Wrapper chn={chn}>
      <WrapperImage src={Img} />
      <WrapperText>
        <TextHeader>{textHead}</TextHeader>
        <TextBody>{textBody}</TextBody>
      </WrapperText>
       </Wrapper>
        </Container>
    )
}

export default HomeMiddle;


const Container = styled.div`
width: 100%;
margin-top: 5vh;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
flex-direction: ${({ chn }) => (chn ? "row-reverse" : "row")};
`;

const WrapperImage = styled.img`
width: 400px;
object-fit: cover;
margin: 0 20px;
`;

const WrapperText = styled.div`
width: 400px;
color: white;
margin: 0 20px;

`;

const TextHeader = styled.h3``;

const TextBody = styled.p`
font-size: 14px;
padding: 0 5px;
`;