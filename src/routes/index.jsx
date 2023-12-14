import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddContacts from '../pages/Add-contacts'
import Home from '../pages/Home'
import ErrorPage from '../pages/404'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/add-contacts',
      element: <AddContacts />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}
