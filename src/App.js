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
            <Link className="App-link" to="/tableFPS">Table FPS</Link>
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
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;