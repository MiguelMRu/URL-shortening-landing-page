import  { useState } from "react";

export function LinkContainer({links}) {
    // Estado para manejar los enlaces copiados
    const [copied, setCopied] = useState({});

    const handleCopied = (shortened, index) => {
        // Copiar el enlace acortado al portapapeles
        navigator.clipboard.writeText(shortened);

        // Indica que boton se ha copiado
        setCopied({[index]: true});
    }

    //Cambian la clase y el texto
    const getButtonClass = (isCopied) => isCopied ? "copy-button copied" : "copy-button";
    const getButtonText = (isCopied) => isCopied ? "Copied!" : "Copy";

    return(
        <>
            {links.length > 0 && links.map((link, index) => (
                <div className="link-item" key={index}>
                    <p className="original-link">{link.original}</p>
                    <div className="shortened-link-container">
                        <a href={link.shortened} target="_blank" rel="noopener noreferrer" className="shortened-link">
                            {link.shortened}
                        </a>
                        <button onClick={() => handleCopied(link.shortened, index)} 
                                className={getButtonClass(copied[index])}>
                            {getButtonText(copied[index])}
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
    