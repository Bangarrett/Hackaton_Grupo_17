import './App.css'
import Merchandising from './components/card-item/CardItem'
import Merchandising2 from './components/card-item/CardItem2'
import TrendingTracks from './components/Carrousel/Carrousel'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <TrendingTracks/>
      <div id="card-item">
      <Merchandising />
      <Merchandising2/>
      </div>
    </>
  )
}

export default App
