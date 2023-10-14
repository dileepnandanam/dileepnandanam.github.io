import './App.css'
import IndexPage from "src/Pages/IndexPage";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Pages from "src/Pages";

const router = createHashRouter([...[{
  title: "Home",
  path: "/",
  element: <IndexPage />,
}], ...Pages]);


function App() {
  return (
    <>
      <div className="topbar"
        style={{
          width: "100%",
          position: "fixed"
        }}
      >
        <div
          style={{
            padding: "12px 18px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <a
            style={{
              color: "white",
              textShadow: "1px 1px 3px yellow"
            }}
            href={"/"}
          >
            Home
          </a>
        </div>
        <div
          style={{
            width: "100%",
            padding: "12px 12px",
            background: "#fff2"
          }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App
