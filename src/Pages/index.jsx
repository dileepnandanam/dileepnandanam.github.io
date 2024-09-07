import React from "react";
import Sketchpad from "src/components/Sketchpad";
import SecretNet from "src/components/SecretNet";

const Intro = () => {
  return(
    <div style={{ padding: "12px" }}>
      <h2 className="glow">
        Introduction
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </div>
  )
}

const Something = () => {
  return(
    <div style={{ padding: "12px" }}>
      <h2 className="glow">
        Something
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </div>
  )
}

const Another = () => {
  return(
    <div style={{ padding: "12px" }}>
      <h2 className="glow">
        Another
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </div>
  )
}

const Draw = () => {
  return(
    <div style={{ padding: "12px" }}>
      <h2 className="glow">
        Dileep's realtime draw
      </h2>
      <p className="glow">
        Drag to draw
      </p>
      <Sketchpad />
    </div>
  )
}

const Pages = [
  {
    path: "intro",
    title: "Introduction",
    element: <Intro />,
  },
  {
    element: <Something />,
    path: "something",
    title: "Something"
  },
  {
    element: <Another />,
    path: "another",
    title: "Another"
  },
  {
    element: <Draw />,
    path: "draw",
    title: "Draw"
  },
  {
    element: <SecretNet />,
    path: "secret_net",
    title: "DBLess"
  }
]

export default Pages;