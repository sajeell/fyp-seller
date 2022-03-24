import { Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import Drawer from './components/dashboard/drawer/Drawer';
import Listings from './components/listings/Listings';
import Providers from './components/providers/Providers';
import Login from './components/login/Login';
import Payments from './components/payments/Payments';
import Users from './components/users/Users';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.user.token);

  return (
    <div className='app-wrapper'>
      <Routes>
        <Route
          exact
          path='/dashboard'
          element={
            <>
              <main className='drawer'>
                <Drawer dashboard={true} />
              </main>
              <main className='right-content'>
                <Dashboard />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
