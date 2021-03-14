import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import Menu from './Component/Menu';


function App() {
  return (
    <div className='container'>
      <Menu/>
  <div className='details'>
  <ProfilPhoto />
  <div>
  <FullName />
  <Adress/>
  </div>
 
</div>
  </div>
  );
}

export default App;
