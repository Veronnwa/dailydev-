import React from 'react'
import styled from 'styled-components'
import Img from './githubImage/DesktopImage.png'

const DeskTop = () => {
return (
<Container>
<Wrapper>
<TopGit>GitHub Desktop</TopGit>
<TopFocus>Focus on what matters instead of fighting with Git. 
wheater you are new to Git or a seasoned user, 
GitHub Desktop simplifies your development workflow.
</TopFocus>
<Button>Download for Windows (64bit)</Button>
<p1>Download for macOS or Windows
<Span>
 (msi)
</Span>
</p1>
<P1>By downloading, you agree to the
<Span>Open Source Applications Terms.
 </Span>
 </P1>
<DesktopImage src={Img} />
</Wrapper>
</Container>
            
        
    );
};


export default DeskTop;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
text-align: center;
width: 70%;
color: white;
`;

const TopGit = styled.h1`
font-size: 58px;
font-weight: 300;
`;

const TopFocus = styled.p`
font-size: 25px;
font-weight: 100;
line-height: 1.2;
margin-top: -18px;
`;

const Button = styled.div`
font-size: 20px;
padding: 10px 20px;
background-color: #8241f9;
border: none;
color: white;
border-radius: 5px;
border-color: #150a27;
cursor: pointer;
margin: 20px 0;
:hover {
    background-color: #8241e9
}
`;
const P1 = styled.p`
margin: 10 80px;
font-weight: lighter;
`;

const Span = styled.span`
color: #8241f9;

:hover {
    cursor: pointer;
    text-decoration: underline;
}
`;

const DesktopImage = styled.img`
width: 100%;
object-fit: cover;
margin-top: 10vh;

`;