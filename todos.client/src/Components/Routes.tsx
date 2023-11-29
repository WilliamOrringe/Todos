import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Error from '../Pages/Error';
import Layout from '../Components/Layout';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path='/*' element={<Error />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
