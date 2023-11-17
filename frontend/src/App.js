import Header from './components/Header'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signin from './components/SignIn/SignIN';
import Signup from './components/SignUp/SignUp';
const App=()=> {
  return (
   <><BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Header/>} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
