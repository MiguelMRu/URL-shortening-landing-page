import { useState, useEffect } from "react";
import { fetchShortenedLink } from "../services/fetchUrl.js"

export function useLinks() {
        const [url, setUrl] = useState("");
        const [error, setError] = useState("");
        const [shortenedLink, setShortenedLink] = useState("");
        const [links, setLinks] = useState([]);
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

    return { links, setUrl, error, setError, handleSubmit };

    }