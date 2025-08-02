import working from '../assets/images/illustration-working.svg'
import './Head.css'

export function Head(){
    return(
        <header>
            <div>
            <h1>More than just shorter links</h1>
            <p>Build your brand`s  recognition and get detailed insights on how your links are performing</p>
            <a href="">Get Started</a>
            </div>
            
            <img src={working} alt="Working ilustration"/>

        </header>
    )
}