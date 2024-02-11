import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BookList';
import Books from './pages/Books';
import NewBook from './pages/NewBook';
import BookLayout from './pages/BookLayout';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" replace>Home</Link>

          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/books' element={<BookLayout />}>

          <Route index element={<BookList />}></Route>
          {/* <Route path='*' element={<PageNotFound />}></Route> */}
          <Route path=':id' element={<Books />}></Route>

          <Route path='new' element={<NewBook />}></Route>
        </Route>
      </Routes>
    </>
  )
}
export default App;