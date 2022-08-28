import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import ShowStudent from './components/ShowStudent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/showstudent" element={<ShowStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
