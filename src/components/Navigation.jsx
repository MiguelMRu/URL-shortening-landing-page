import logo from '../assets/images/logo.svg'
import './Navigation.css'

export function Navigation(){
    
    
    return(
        <nav>
            <img src={logo} alt='Logo Shertly'/>

            <input type="checkbox" id='menu-toggle' style={{ display: 'none' }} />
            <label htmlFor='menu-toggle' className='menu-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </label>
            <section className='nav-container'>
                <div className='nav-links'>
                    
                    <a href="" >Features</a>
                    <a href="" >Pricing</a>
                    <a href="" >Resources</a>
                </div>

                <div className='login-container'>
                    <a href="">Login</a>
                    <a href="" className='sign-up'>Sign Up</a>
                </div>
            </section>
            
            

        </nav>
    )

}