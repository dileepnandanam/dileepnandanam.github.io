import React from "react";
import Sketchpad from "src/components/Sketchpad";

const Intro = () => {
  return(
    <>
      <h2 className="glow">
        Introduction
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </>
  )
}

const Something = () => {
  return(
    <>
      <h2 className="glow">
        Something
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </>
  )
}

const Another = () => {
  return(
    <>
      <h2 className="glow">
        Another
      </h2>
      <p className="glow">
        Dont know what content to put here yet. Hate when people ask this question.
      </p>
    </>
  )
}

const Draw = () => {
  return(
    <>
      <h2 className="glow">
        Dileep's realtime draw
      </h2>
      <p className="glow">
        Drag to draw
      </p>
      <Sketchpad />
    </>
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
  }
]

export default Pages;