import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import ShowBooks from './components/ShowBooks';
import AddBook from './components/AddBook';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <NavBarMenu/>
          <Routes>
            <Route exact path="/" element={<ShowBooks />} />
            <Route exact path="addBook" element={<AddBook />} />    
            <Route exact path="bookDetail" element={<BookDetail />} />                  
          </Routes>
      </BrowserRouter>     
      
    </div>
  );
}

export default App;
