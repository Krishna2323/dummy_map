import './App.css';
import { useEffect } from 'react';
import Cytoscape from './components/cytoscape/Cytoscape';
import Sidebar from './components/sidebar/Sidebar';
import cy from "./components/cytoscape/index";
import img from "./components/assets/book-my-show.png"




function App() {


  return (
    <div id="App">
      <Sidebar/>
      <Cytoscape/>
      <img src={img} alt="" />
    </div>
  );
}

export default App;
