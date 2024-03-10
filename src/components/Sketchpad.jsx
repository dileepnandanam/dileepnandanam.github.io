import React, { useState, useEffect, useRef } from "react";

const Sketchpad = () => {

  const [showCanvas, setShowCanvas] = useState(false);
  return(
    <>
      <div
        style={{ background: "white", width: "100%", height: "75vh", position: "relative" }}
        onClick={() => {
          setShowCanvas(true)
        }}
      >
      {
        showCanvas && <SketchPadInner />
      }
      </div>
    </>
  )
}

export default Sketchpad;


const SketchPadInner = () => {
  const [mouseDown, setMouseDown] = useState(false)
  const [path, setPath] = useState([])
  const [ctx, setCtx] = useState();
  const [offset, setOffset] = useState([]);
  const [canvas, setCanvas] = useState();
  const [container, setContainer] = useState();

  const canref = useRef();
  const contref = useRef();

  useEffect(() => {
    setCanvas(canref.current);
    setContainer(contref.current);
    setCtx(canref.current.getContext("2d"));
    canref.current.width = contref.current.getBoundingClientRect().width;
    canref.current.height = contref.current.getBoundingClientRect().height;
    canref.current.style.width = "100vw";
    canref.current.style.height = "100vh";
    setOffset(canref.current.getBoundingClientRect());
  }, [])

  const point = (e) => {
    return([e.clientX - offset.left, e.clientY - offset.top])
  }

  const mousedown = (e) => {
    setMouseDown(true);
    setPath((p) => [...p, point(e)])
  }
  const touchstart = (touchEvent) => {
    const mouseEvent = new MouseEvent(name, {
      clientX: touchEvent.changedTouches?.[0]?.clientX,
      clientY: touchEvent.changedTouches?.[0]?.clientY
    });
    mousedown(mouseEvent)
  }
  const mouseup = (e) => {
    setMouseDown(false);
    setPath([]);
  }
  const touchend = (touchEvent) => {
    const mouseEvent = new MouseEvent(name, {
      clientX: touchEvent.changedTouches?.[0]?.clientX,
      clientY: touchEvent.changedTouches?.[0]?.clientY
    });
    mouseup(mouseEvent)
  }
  const mousemove = (e) => {
    console.log(e)
    if (!mouseDown) return;

    const lastPos = path[path.length - 1]
    setPath((p) => [...p, point(e)])

    ctx.moveTo(...lastPos);
    ctx.lineTo(...point(e));
    ctx.stroke();
  }
  const touchmove = (touchEvent) => {
    const mouseEvent = new MouseEvent(name, {
      clientX: touchEvent.changedTouches?.[0]?.clientX,
      clientY: touchEvent.changedTouches?.[0]?.clientY
    });
    mousemove(mouseEvent)
  }

  return(
    <div
      ref={contref}
      style={{ background: "white", width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0" }}
    >
      <canvas
        onTouchStart={touchstart}
        onTouchEnd={touchend}
        onTouchMove={touchmove}
        onMouseMove={mousemove}
        onMouseUp={mouseup}
        onMouseDown={mousedown}
        style={{ background: "white", width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0" }}
        ref={canref}
      >

      </canvas>
    </div>
  )
}