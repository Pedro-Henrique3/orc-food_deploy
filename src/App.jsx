import { createBrowserRouter, RouterProvider, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/pages/gerais/Home";
import Contact from "./components/pages/gerais/Contact";
import PaginaCliente from "./components/pages/cliente/PaginaCliente";
import PaginaAdmin from './components/pages/admin/PaginaAdmin';
import ErrorPage from './components/pages/gerais/ErrorPage';
import Carrinho from "./components/pages/cliente/Carrinho";
import PedidosAdmin from "./components/pages/admin/PedidosAdmin";
import DetalhePedidoCliente from "./components/pages/cliente/DetalhePedidoCliente";
import DetalhePedidoAdmin from "./components/pages/admin/DetalhePedidoAdmin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

const Dashboard = () =>{
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // Página em que o admin pode ver os pedidos em geral.
        path: "/pedidosadmin",
        element: <PedidosAdmin />,
      },
      {
        // Página em que o cliente pode ver seus próprios pedidos. 
        path: "/carrinho",
        element: <Carrinho />,
      },
    ],
  },
  {
    path: "/paginacliente",
    element: <PaginaCliente />,
  },
  {
    path: "/paginaadmin",
    element: <PaginaAdmin />,
  },
  {
    path: "/detalhepedidocliente/:id",
    element: <DetalhePedidoCliente />,
  },
  {
    path: "/detalhepedidoadmin/:id",
    element: <DetalhePedidoAdmin />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  )
}

export default App
