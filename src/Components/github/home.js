import React from 'react'
import styled from 'styled-components';
import TopHeader from './topHeader';
import HomeCentral from './MiddleLevel/homeCentral';


const Home = () => {
    return (
        <Container>
            <Wrapper>
                <TopHeader />
                <HomeCentral />
            </Wrapper>
        </Container>
            

    )
}

export default Home

const Container = styled.div`
width: 100%;
min-heaight: 100vh;
height: 100%
`;

const Wrapper = styled.div`
width: 100%;
height: 70vh;
background-image
`;