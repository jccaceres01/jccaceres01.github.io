import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import Portfolio from '../pages/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ]
  }
]);

export default router;