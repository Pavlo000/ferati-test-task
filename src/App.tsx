import { Routes, Route } from 'react-router-dom';

import './App.scss';
import './generalStyles/reset.scss';
import './generalStyles/normalize.scss';
import './generalStyles/container.scss';

import { useEffect, useState } from 'react';
import { Menu } from './features/Menu';
import { useAppDispatch } from './app/hooks';
import { changeHasLargeScreen } from './AppSlice';

import { Home } from './pages/Home';
import { Navbar } from './features/Navbar';
import { Cars } from './pages/Cars';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const TABLEWIDTH = 992;

  const [hasMenu, setHasMenu] = useState(false);

  const onClick = () => {
    setHasMenu(!hasMenu);
  };

  useEffect(() => {
    const handleResize = (event: Event) => {
      const target = event.target as Window;

      if (target.window.innerWidth < TABLEWIDTH) {
        dispatch(changeHasLargeScreen(false));
      } else {
        setHasMenu(false);
        dispatch(changeHasLargeScreen(true));
      }
    }
    window.addEventListener('resize', (event) => handleResize(event));

    return () => {
      window.removeEventListener('resize', (event) => handleResize(event));
    }

  }, [dispatch]);

  return (
    <div className="App">
      <Menu hasOpen={hasMenu} />
      <Navbar 
        handlerClick={onClick} 
        hasMenu={hasMenu} 
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
