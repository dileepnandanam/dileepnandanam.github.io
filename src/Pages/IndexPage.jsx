import React from "react";
import Pages from "src/Pages";

const IndexPage = () => {
  return(
    <div
      style={{
        display: "block",
        width: "100%",
        padding: "20px"
      }}
    >
      {
        Pages.map((p) => (
          <a
            href={`#${p.path}`}
            style={{
              display: "block",
              color: "white"
            }}
          >
            {
              p.title
            }
          </a>
        ))
      }
    </div>
  )
}

export default IndexPage;
