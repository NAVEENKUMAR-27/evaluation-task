
import './App.css';
import { Home } from './Components/Home';
import { SignUp } from './Components/SignUp';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <SignUp/>
      <Home/> */}
      <Router>
        <Routes>
              <Route path="/" element={<SignUp/>}/>
              <Route path="/Home" element={<Home/>}/>

        </Routes>
      </Router>


    </>
  );
}

export default App;
