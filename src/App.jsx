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
      </div>
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          background: "#fff2"
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
