import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoaders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch('products.json'),
        element: <Shop />
      },
      {
        path: "orders",
        loader: productsAndCartLoader,
        element: <Orders />
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
