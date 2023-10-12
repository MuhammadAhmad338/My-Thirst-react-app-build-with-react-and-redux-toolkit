import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";
import { ToastContainer } from 'react-toastify';
import './index.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <ToastContainer />
    </div>
  );
}
export default App;
