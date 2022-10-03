import { ReactElement } from 'react';
import BottomNavbar from './layout/bottom_navbar';
import TopNavbar from './layout/top_navbar';
import Home from './pages/Home/home';
import { Div } from './styles';

function App(): ReactElement {
  return (
    <Div>
      <TopNavbar />
      <BottomNavbar/>
      <Home />
    </Div>
  );
}

export default App;
