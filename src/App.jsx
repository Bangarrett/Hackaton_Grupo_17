import './App.css'
import Merchandising from './components/card-item/CardItem'
import Merchandising2 from './components/card-item/CardItem2'
import TrendingTracks from './components/Carrousel/Carrousel'
import Navbar from './components/Navbar/Navbar'
import ContactAlert from './components/contact-alert/ContactAlert'
function App() {
  return (
    <>
      <Navbar />
      <TrendingTracks/>
      <div id="card-item">
      <Merchandising />
      <Merchandising2/>
      <ContactAlert/>
      </div>
    </>
  )
}

export default App
