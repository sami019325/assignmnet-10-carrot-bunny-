import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRouting from './Components/MainRouting';
import Home from './Components/Home/Home';
import Course from './Components/Course/Course';
import CreateUserMail from './Components/User/CreateUserMail';
import LogIn from './Components/User/LogIn';

const router = createBrowserRouter([
  {
    path: '/', element: <MainRouting />, children: [
      { path: '/', element: <Home /> },
      { path: '/course', element: <Course /> },
      { path: '/register', element: <CreateUserMail /> },
      { path: '/login', element: <LogIn /> }

    ]
  },
  { path: '*', element: <div>$04</div> }
])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
