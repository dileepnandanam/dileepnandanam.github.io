import React from "react";

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

const Pages = [
  {
    path: "/intro",
    title: "Introduction",
    element: <Intro />,
  },
  {
    element: <Something />,
    path: "/something",
    title: "Something"
  },
  {
    element: <Another />,
    path: "/another",
    title: "Another"
  }
]

export default Pages;