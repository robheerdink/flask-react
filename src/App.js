import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import PageHome from './pages/Home';
import PageTest from './pages/Test';
import PageTableSimple from './pages/Table1';
import PageTableFilter from './pages/Table2';
import PageTablePagination from './pages/Table3';
import PageTableSorting from './pages/Table4';
import PageTableFPS from './pages/TableFPS';
import Create from './pages/api.post';
import Read from './pages/api.read';
import Update from './pages/api.update';
import Form1 from './pages/hookform1';

function App() {
  const sep = ' | '
  return (
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
          <div>
            <Link className="App-link" to="/">home</Link>{sep}
            <Link className="App-link" to="/test">test</Link>{sep}
            <Link className="App-link" to="/table1">Table simple</Link>{sep}
            <Link className="App-link" to="/table2">Table Filter</Link> {sep}
            <Link className="App-link" to="/table3">Table Pagination</Link>{sep}
            <Link className="App-link" to="/table4">Table Sorting</Link>{sep}
            <Link className="App-link" to="/tableFPS">Table FPS</Link>{sep}
            <Link className="App-link" to="/api_post">api post</Link>{sep}
            <Link className="App-link" to="/api_read">api get</Link>{sep}
            <Link className="App-link" to="/api_update">api update</Link>{sep}
            <Link className="App-link" to="/hookform1">hook from test 1</Link>{sep}
      </div>
          </header>
          <Routes>
            <Route exact path="/"  element={<PageHome/>} />
            <Route path="/test"  element={<PageTest/>}  />
            <Route path="/table1"  element={<PageTableSimple/>} />
            <Route path="/table2"  element={<PageTableFilter/>} />
            <Route path="/table3"  element={<PageTablePagination/>} />
            <Route path="/table4"  element={<PageTableSorting/>} /> 
            <Route path="/tableFPS"  element={<PageTableFPS/>} />
            <Route path="/api_post"  element={<Create/>} />
            <Route path="/api_read"  element={<Read/>} />
            <Route path="/api_update"  element={<Update/>} />
            <Route path="/hookform1"  element={<Form1/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;