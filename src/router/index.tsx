import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Detail, Home } from 'pages';
import { PATHS } from 'constants/router';

import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={`${PATHS.DETAIL}/:id`} element={<Detail />} />
    </Route>
  )
);

export default router;
