import React, {useState} from 'react';
import {DisplayTags, SelectBox} from "./components";
import { Container } from '@mui/material'
import './App.css';

function App() {
  const [sortType, setSortType] = useState('popular');
  const [sortOrder, setSortOrder] = useState('desc');
  const [pageSize, setPageSize] = useState('100');

  return (
    <Container className="App">
      <SelectBox setSortType={setSortType} setSortOrder={setSortOrder} setPageSize={setPageSize} sortType={sortType} sortOrder={sortOrder}/>
      <DisplayTags sortType={sortType} sortOrder={sortOrder} pageSize={pageSize}/>
    </Container>
  );
}

export default App;
