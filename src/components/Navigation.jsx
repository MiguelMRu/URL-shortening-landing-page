import logo from '../assets/images/logo.svg'
import './Navigation.css'

export function Navigation(){
    
    
    return(
        <nav>
            <div className='nav-links'>
                <img src={logo} alt='Logo Shertly'/>
                <a href="" >Features</a>
                <a href="" >Pricing</a>
                <a href="" >Resources</a>
            </div>

            <div className='login-container'>
                <a href="">Login</a>
                <a href="">Sing up</a>
            </div>
        </nav>
        
    )
    
}