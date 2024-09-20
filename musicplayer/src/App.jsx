import React from 'react'
import Frontpage from './components/Pages/Frontpage'
import SongDisplay from './components/Pages/SongDisplay';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import { SongContext } from './components/Context/Context';

const App = () => {
  // const {all_songs}=useContext(SongContext);
  return (
    <div >
    
     <Router>
        <Routes>
         <Route path='/' element={ <Frontpage/>}/>
         <Route path='song1' element={<SongDisplay music='I am the Best'/> } />
         <Route path='song2' element={<SongDisplay  music='Dancing Queen'/>} />
         <Route path='song3' element={<SongDisplay music='Beautiful'/>} />
         <Route path='song4' element={<SongDisplay music='Lili Marlene'/>} />
         <Route path='song5' element={<SongDisplay music='Rose Garden'/>} />
         <Route path='song6' element={<SongDisplay music='The Cattle Call'/>} />
         <Route path='song7' element={<SongDisplay  music='Never Give up You'/>} />
         <Route path='song8' element={<SongDisplay  music='Upside Down'/>}/>
         <Route path='song9' element={<SongDisplay music='Levels'/>} />
         <Route path='song10' element={<SongDisplay music='Goldfinger'/>} />
        </Routes>
     </Router>
    </div>
  )
}

export default App
