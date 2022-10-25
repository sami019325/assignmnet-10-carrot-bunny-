import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRouting from './Components/MainRouting';

const router = createBrowserRouter([
  {
    path: '/', element: <MainRouting />, children: [
      { path: '/', element: <div>Another home</div> }
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
