import React, { useState, useEffect, useRef } from "react";

const Sketchpad = () => {

  const [others, setOthers] = useState([]);
  const [mine, setMine] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);

  const screenRef = useRef(null);

  const point = (e) => ([e.changedTouches[0].clientX - x, e.changedTouches[0].clientY - y])

  const drawablePath = (path) => {
    let paths = []
    path.map((p, i) => {
      const p1 = path[i]
      const p2 = path[i+1]
      if (p2) {
        paths = [...paths, [[parseInt(p1[0]), parseInt(p1[1])], [parseInt(p2[0]), parseInt(p2[1])]]]
      }
    })


    return paths.filter((p) => p[0][0] != p[1][0] && p[0][1] != p[1][1]).map((p) => (<line x1={p[0][0]} y1={p[0][1]} x2={p[1][0]} y2={p[1][1]} style={{ stroke: "black", strokeWidth: "2" }} />))
  }

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const rect = screenRef.current.getBoundingClientRect()
    setX(rect.x)
    setY(rect.y)
  }, []);
  

  return(
    <>
      <div
        style={{ background: "white", width: "100%", height: "75vh", position: "relative" }}
        ref={screenRef}
        onTouchEnd={(e) => {
          setMine(p => [...p, [...currentPath]]);
          setCurrentPath(prev => [])
        }}
        onTouchMove={(e) => {
          console.log(e)
          setCurrentPath(prev => [...prev, point(e)])
        }}
        onTouchStart={(e) => {
          console.log(e)
          setCurrentPath(prev => [...prev, point(e)])
        }}
      >
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            {
              mine.map((set) => (
                <>
                  {drawablePath(set)}
                </>
              ))
            }
            {
              drawablePath(currentPath)
            }
          </g>
        </svg>
      </div>
    </>
  )
}

export default Sketchpad;