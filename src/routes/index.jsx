import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListContacts from "../pages/List-contacts"
import AddContacts from "../pages/Add-contacts"
import Home from "../pages/Home"
import ErrorPage from "../pages/404"
import DetailContact from "../pages/Detail-Contact"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-contacts",
      element: <AddContacts />,
    },
    {
      path: "/list-contacts",
      element: <ListContacts />,
    },
    {
      path: "/contact/:name",
      element: <DetailContact />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}
