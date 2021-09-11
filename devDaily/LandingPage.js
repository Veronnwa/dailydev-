import React, {useState} from 'react'
import './landingPage.css'
import Img from '../image/img.jpg'
import moment from 'moment'
const LandingPage = () =>{
    
    const [user,setUser] = useState([
        {
            id: 1,
            name:'Veronica',
            quote:'There is more  to life if you only believe in yourself and do more about what are born to do',
            img:Img,
            time: Date.now()
        },
        {
            id:2,
            name:'Bright',
            quote:'Eweeeeeeee!!!',
            img:Img,
            time:Date.now()
        },
        {
            id:3,
            name:'Tope',
            quote:'Logan ti ode oluwa a ye leto',
            img:Img,
            time:Date.now()
        },
        {
            id:4,
            name:'Tina',
            quote:'Oluwanoni ari batishe ooo, alawalahi',
            img:Img,
            time:Date.now()
        },
    ])
    console.log(user)

    

    return(
        <div>
            <div className="container">
                <div className="containerWrapper">
                    {user.map((data) =>(
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
