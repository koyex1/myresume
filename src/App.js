import './App.css';
import HomeScreen from './Component/HomeScreen';
import HeaderScreen from './Component/HeaderScreen';
import {BrowserRouter} from 'react-router-dom';




function App() {
  return (
    <>
<BrowserRouter>
    <div className="surroundingBody">
    <HeaderScreen/>
   <HomeScreen/>

   </div>
</BrowserRouter>

    </>
  );
}

export default App;
