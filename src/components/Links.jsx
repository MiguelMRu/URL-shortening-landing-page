import { useState, useEffect } from "react"
import { Info } from "./Info"
import "./Links.css"
import { fetchShortenedLink } from "../services/fetchUrl.js"

export function Links(){
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [shortenedLink, setShortenedLink] = useState("");
    const [links, setLinks] = useState([]);

    useEffect(() => {
       fetchShortenedLink(url, setShortenedLink, setError);
       if (shortenedLink) {
           setLinks((prevLinks) => [...prevLinks, { original: url, shortened: shortenedLink }]);
       }
    }, [url]);

    //funcion para obtener el valor del input y enviar la url a la api
    const handleSubmit = (e) => {
        //no recargar la pagina
        e.preventDefault();

        const input = new window.FormData(e.target);
        const inputUrl = input.get("links-input");
        if (!inputUrl) {
            setError("Please enter a URL to shorten.");
            return;
        }
        setUrl(inputUrl);
        setError(""); // Clear any previous error

    }


    return(
        <main>  
            <form onSubmit={handleSubmit}>
                <div className="input-container">     
                    <input type="text" name="links-input" id="links-input" placeholder="Shorten a link here" />
                    <button type="submit">Shorten it!</button>
                </div>
                {error && <p className="Error">{error}</p>}
            </form>
            <section className="links-list">
                {links.length > 0 && links.map((link, index) => (
                    <div className="link-item" key={index}>
                        <p className="original-link">{link.original}</p>
                        <div className="shortened-link-container">
                            <a href={link.shortened} target="_blank" rel="noopener noreferrer" className="shortened-link">
                                {link.shortened}
                            </a>
                            <button onClick={() => navigator.clipboard.writeText(link.shortened)} className="copy-button">Copy</button>
                        </div>
                    </div>
                ))}
            </section>

            <Info/>

        </main>

    )
}