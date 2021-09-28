import React from 'react'
import styled from 'styled-components';
import TopHeader from './topHeader';
import DeskTop from './deskTop';


 const HomeGithub= () => {
    return (
        <Container>
            <TopHeader></TopHeader>
            <DeskTop/>
        </Container>
        
    )
    
}
export default HomeGithub;

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%
`