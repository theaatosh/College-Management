import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { MainLayout } from "./Layouts/MainLayout"
export const App=()=>{
  const router=createBrowserRouter([
    
    {
element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> 
        
      },
    {
      path:"*",
      element:<NotFound/>
    }]
  }
  ])
  return(
   <RouterProvider router={router}/>
  )
}