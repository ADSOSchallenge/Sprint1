
import App from './App.tsx'
import EditarCadastros from './routes/EditarCadastros/index.tsx'
import { createRoot } from 'react-dom/client';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import Cadastro from './routes/Cadastro/index.tsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';





const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/", elemen: <Home/>},
      {path:"/integrantes", element: <Integrantes/>},
      {path:"/cadastro", element: <Cadastro/>},
      {path:"/editar/cadastros/:id", element: <EditarCadastros/>},
      {path:"/faq", element: <Faq/>},
      {path:"/contato", element: <Contato/>}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)