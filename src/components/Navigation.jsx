import logo from '../assets/images/logo.svg'

export function Navigation(){
    
    
    return(
        <nav>
            <img src={logo} alt='Logo Shertly'/>
            <a href="" >Features</a>
            <a href="" >Pricing</a>
            <a href="" >Resources</a>

            <div className='login-container'>
                <a href="">Login</a>
                <a href="">Sing up</a>
            </div>
        </nav>
        
    )
    
}