import { useLinks } from "../hooks/useLinks.jsx";
import { Info } from "./Info"
import "./Links.css"

import { LinkContainer } from "./LinkContainer.jsx";

export function Links(){
    const { links, error, handleSubmit } = useLinks();

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
                <LinkContainer links={links} />
            </section>

            <Info/>

        </main>

    )
}