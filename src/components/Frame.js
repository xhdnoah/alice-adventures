import React from "react";

export const Frame = (props) => {
  const frame = React.useRef(null);
  const onFrameLoad = () => {
    frame.current.height =
      frame.current.contentWindow.document.documentElement.scrollHeight;
    frame.current.width =
      frame.current.contentWindow.document.documentElement.scrollWidth;
  };
  return (
    <iframe
      ref={frame}
      src={props.src}
      allowFullScreen={true}
      scrolling="no"
      onLoad={onFrameLoad}
      framebordering="0"
      style={{ width: "100%", border: "none", overflow: "hidden" }}
    ></iframe>
  );
};
