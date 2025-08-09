import { useState, useEffect } from "react"
import { Info } from "./Info"
import "./Links.css"
import { fetchShortenedLink } from "../services/fetchUrl.js"
import { use } from "react";

export function Links(){
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [shortenedLink, setShortenedLink] = useState("");
    const [links, setLinks] = useState([]);
    const [copied, setCopied] = useState(false);

    

    // Llamada a la funcion fetchShortenedLink para acortar la url
    useEffect(() => {
       fetchShortenedLink(url, setShortenedLink, setError);
       
    }, [url]);

    // Cuando se obtiene un enlace acortado, se agrega a la lista de enlaces
    useEffect(() => {
        if (shortenedLink && url.trim) {
           setLinks((prevLinks) => [...prevLinks, { original: url, shortened: shortenedLink }]);
           //Resetear los estados
           setShortenedLink("");
           setUrl("");
       }
    }, [shortenedLink]);

    //funcion para obtener el valor del input y enviar la url a la api
    const handleSubmit = (e) => {
        //no recargar la pagina
        e.preventDefault();
        //obtener el valor del input
        const input = new window.FormData(e.target);
        const inputUrl = input.get("links-input");
        if (inputUrl !== "" && inputUrl !== null) {
            setUrl(inputUrl);
            setError(""); // Clear any previous error
            console.log("Input URL:", inputUrl);
            console.log("Submitting URL:", url);
            e.target.reset();
        } else{
            setError("Please enter a URL to shorten.");
        }

    }

    const handleCopied = (shortened) => {
        navigator.clipboard.writeText(shortened);
        setCopied(true);
    }

    const copiedClass = copied ? "copy-button copied" : "copy-button";
    const copiedText = copied ? "Copied!" : "Copy";

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
                            <button onClick={() => handleCopied(link.shortened)} className={copiedClass}>{copiedText}</button>
                        </div>
                    </div>
                ))}
            </section>

            <Info/>

        </main>

    )
}