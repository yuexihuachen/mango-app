import {
  RouterProvider,
} from "react-router";

import {router} from '@/routes/routes'

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
