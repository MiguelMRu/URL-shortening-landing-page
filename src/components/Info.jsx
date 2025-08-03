import './Info.css'
import brand_recognition from '../assets/images/icon-brand-recognition.svg'
import detailed_records from '../assets/images/icon-detailed-records.svg'
import fully_customizable from '../assets/images/icon-fully-customizable.svg'

export function Info(){
    return(
        <section className="info-container">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className='cards-container'>
                <article className='info-card'>
                    <img src={brand_recognition} alt="Brand Recognition Icon" />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </article>
                <article  className='info-card'>
                    <img src={detailed_records} alt="Detailed Records Icon" />
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </article>
                <article className='info-card'>
                    <img src={fully_customizable} alt="Fully Customizable Icon" />
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </article>
            </div>
            
        </section>
    )
}