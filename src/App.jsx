import './App.css'
import TrendingTracks from './components/Carrousel'
import Merchandising from './components/card-item/CardItem'
import Merchandising2 from './components/card-item/CardItem2'
function App() {
  return (
    <>
      <TrendingTracks />
      <div id="card-item">
      <Merchandising />
      <Merchandising2/>
      </div>
    </>
  )
}

export default App
