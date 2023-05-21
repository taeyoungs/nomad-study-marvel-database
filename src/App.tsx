import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from 'components';

import router from './router';
import './index.css';

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
