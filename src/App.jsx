import './App.css'
import { Navigation } from './components/Navigation'
import { Head } from './components/Head'
import { Links } from './components/Links'
import { Footer } from './components/Footer'
function App() {

  /*Your users should be able to:

  - Shorten any valid URL
  - See a list of their shortened links, even after refreshing the browser
  - Copy the shortened link to their clipboard in a single click
  - Receive an error message when the `form` is submitted if: The `input` field is empty
  - View the optimal layout for the site depending on their device's screen size

*/

  return (
    <>          
      <Navigation/>
      <Head/>
      <Links/>
      <Footer/>
      
    </>
  )
}

export default App
