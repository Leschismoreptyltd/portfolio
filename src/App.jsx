import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import routes from "./routes/path.jsx"

const queryClient = new QueryClient;



function App() {

  const router = createBrowserRouter([{

    element: <Layout/>,
    children: routes,
  }
  ])

  return (
    <>
      <QueryClientProvider client = {queryClient}>

        <RouterProvider router = {router}/>

      </QueryClientProvider>
    </>
  )
}

export default App
