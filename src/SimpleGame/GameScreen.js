import React, {useState, useEffect}  from "react"
import styled from 'styled-components'
 
const GameScreen = () => { 

    const [picker, setPicker] = useState(0)

    const [computer, setComputer] = useState(0)

    const computerRandom = (min, max) => {
        setComputer(Math.floor(Math.random()*(max - min ) + min))
    }

    useEffect(() => {
        const timer_id = setInterval(() => {
            computerRandom(1, 5)
        }, 5000)

        return() => clearInterval(timer_id)
    }, [])

    return (
        <div>
        <Container>
            <Wrapper>
               <WrapperName> Veron's Game  </WrapperName>
               <WrapperRow>
                   <WrapperRowMe>
                   <WrapperBoxMe>{picker}</WrapperBoxMe>
                   <NumberBox>
                   <Number onClick={() => {
                       setPicker(1)
                   }}>1</Number>

                   <Number onClick={() => {
                       setPicker(2)
                   }}>2</Number>
                   <Number onClick={() => {
                       setPicker(3)
                   }}>3</Number>

                   <Number onClick={() => {
                       setPicker(4)
                   }}>4</Number>

                   <Number onClick={() => {
                       setPicker(5)
                   }}>5</Number>
                   
                   </NumberBox>
                   <WrapperTextMe>Veron</WrapperTextMe>
                   </WrapperRowMe>
                   <WrapperRowComputer>
                   <WrapperBox>{computer}</WrapperBox>
                   <WrapperTextMe>Computer</WrapperTextMe>
                   </WrapperRowComputer>
                   <Result> { picker === computer ? <span>You Win!</span>: <span>You Lose</span>}</Result>
               </WrapperRow>
                </Wrapper>
            </Container>
    </div>
    )
}

export default GameScreen;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: red;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
`
const WrapperName = styled.div`
padding: 30px 0;
font-size: 50px;
font-weight: bold;
margin-botton: 20px;
`
const WrapperRow = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
flex-wrap: wrap;

`
const WrapperRowMe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`

const WrapperRowComputer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`
const WrapperBox = styled.div`
width: 250px;
height: 200px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`

const NumberBox = styled.div`
display: flex;
`
const Number = styled.div`
font-size: 15px;
padding: 4px 10px;
background: white;
margin: 8px 4px;
border-radius: 50px;
cursor: pointer;

`
const WrapperTextMe = styled.div`
font-size: 20px;
padding: 10px 0;
`

const WrapperBoxMe = styled.div`
width: 250px;
height: 200px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Result = styled.div`
width: 150px;
padding:15px;
background-color: red;
text-align: center;
font-size: 19px;
border-radius: 7px;
cursor: pointer;

`