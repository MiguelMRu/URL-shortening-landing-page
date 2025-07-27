import logo from '../assets/images/logo.svg'
import facebook_icon from '../assets/images/icon-facebook.svg'
import twitter_icon from '../assets/images/icon-twitter.svg'
import pinterest_icon from '../assets/images/icon-pinterest.svg'
import instagram_icon from '../assets/images/icon-instagram.svg'

export function Footer(){
    return(
        <footer>
            <section className="get-started">
                <h2>Boost your links today</h2>
                <a href="">Get Started</a>
            </section>
            <section className="footer">
                <img src={logo} alt='Logo Shertly'/>
                <span className='links'>
                    <h5>Features</h5>
                    <a href="">Link Shortening</a>
                    <a href="">Branded Links</a>
                    <a href="">Analytics</a>  

                </span>
                <span className='links'>
                    <h5>Resources</h5>
                    <a href="">Blog</a>
                    <a href="">Developers</a>
                    <a href="">Support</a>
                </span>
                <span className='links'>
                    <h5>Company</h5>
                    <a href="">About</a>
                    <a href="">Our Team</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                </span>
                <span className='social-links'>
                    <a href=""><img src={facebook_icon} alt="Icon of facebook"/></a>
                    <a href=""><img src={twitter_icon} alt="Icon of twitter" /></a>
                    <a href=""><img src={pinterest_icon} alt="Icon of pinterest" /></a>
                    <a href=""><img src={instagram_icon} alt="Icon of instagram" /></a>

                </span>
            </section>
        </footer>
    )
}