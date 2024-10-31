import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MessagePage from '../components/message-page';
import CheckEmail from '../pages/check-email';
import CheckPassword from '../pages/check-password';
import Home from '../pages/home';
import RegisterPage from '../pages/register-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'email',
        element: <CheckEmail />,
      },
      {
        path: 'password',
        element: <CheckPassword />,
      },
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: ':userId',
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
