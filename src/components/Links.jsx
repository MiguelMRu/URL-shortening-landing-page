import { Info } from "./Info"

export function Links(){
    return(
        <main>  
            <form>
                <input type="text" name="links-input" id="links-input" placeholder="Shorten a link here" />
                <button type="submit">Shorten it!</button>
                <span className="Error"></span>
            </form>
            <section className="likns-list">

            </section>

            <Info/>

        </main>

    )
}