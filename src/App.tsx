import React from 'react';
import ReactDOM from 'react-dom';
import { ReactElement } from 'react';
import TopNavbar from './layout/TopNavbar';
import Home from './pages/Home/home';
import { Div } from './components/Global/style';

function App(): ReactElement {
  return (
    <Div>
      <TopNavbar />
      <Home />
    </Div>
  );
}

export default App;
