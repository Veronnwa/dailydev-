import React, { useState } from 'react'
import './landingPage.css'
import Img from '../image/img.jpg'
import moment from 'moment'
const LandingPage = () => {


    const [user, setUser] = useState([
        {
            id: 1,
            name: 'Veronica',
            quote: 'There is more  to life if you only believe in yourself and do more about what are born to do',
            img: Img,
            time: Date.now()
        },
        {
            id: 2,
            name: 'Bright',
            quote: 'Eweeeeeeee!!!',
            img: Img,
            time: Date.now()
        },
        {
            id: 3,
            name: 'Tope',
            quote: 'Logan ti ode oluwa a ye leto',
            img: Img,
            time: Date.now()
        },
        {
            id: 4,
            name: 'Tina',
            quote: 'Oluwanoni ari batishe ooo, alawalahi',
            img: Img,
            time: Date.now()
        },
    ])
    console.log(user)

    const pushData = () => { 

    }

    const [image, setImage] = useState("");
    const [Name,setName] = useState("");
    const [MyMind, setMyMind] = useState("");
      
    const uploadImage = (e) => {
        const file = e.target.files[0]
        const saveFile=URL.createObjectURL(file)
        setImage (saveFile)
            
    }



    return (
        <div>
            <div className="container">
                <div className="container_input">
                    <img className="container_inputimage" src={image}/>
                    <div className="container_inputsFile">
                        <input type="file" className="container_inputSingle"/>
                        <input placeholder="Name" className="container_inputSingle"
                        value={Name}
                        onChange={(e) => { setName(e.target.value);
                        }}
                        />
                        <input placeholder="What is on your mind" 
                        className="container_inputSingle"
                        value={MyMind} onChange={(e) => { setMyMind(e.target.value);
                        }}
                            />
                        <div className="container_buttonDiv">
                        <button className="container_button">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="containerWrapper">
                    {user.map((data) => (
                        <div className="containerCard" key={data.id}>
                            <div className="containerCardAlign">
                                <div className="containerCardRow">
                                    <div className="containerCardRowCancel">X</div>
                                    <img className="containerCardRowImage" src={data.img} alt={data.name} />
                                </div>
                                <div className="containerQuote">{data.quote}</div>
                                <div className="containerName">{data.name}</div>
                                <div className="containerTime">{moment(data.time).toNow().toString()}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LandingPage
// when you export a file, you need to import the file to your App.js which is the root file
