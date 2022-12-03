import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./components/login";
import {Register} from "./components/register";
import {Booklist} from "./components/booklist";
import {Addbook} from "./components/addbook";
import { Editbook } from './components/editbook';
import {Bookrecord} from "./components/bookrecord";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/booklist' element={ <Booklist />} />
      <Route path='/addbook' element={ <Addbook />} />
      <Route path='/bookrecord' element={ <Bookrecord />} />
      <Route path='/editbook' element={ <Editbook />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
