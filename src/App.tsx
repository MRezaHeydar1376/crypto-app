import { ReactElement } from 'react';
import TopNavbar from './layout/TopNavbar';
import Home from './pages/Home/home';
import { Div } from './styles';

function App(): ReactElement {
  return (
    <Div>
      <TopNavbar />
      <Home />
    </Div>
  );
}

export default App;
