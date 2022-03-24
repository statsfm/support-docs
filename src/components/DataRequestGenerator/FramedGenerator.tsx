import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class FramedGenerator extends Component<
  {},
  { iFrameHeight: string }
> {
  constructor(props) {
    super(props);
    this.state = {
      iFrameHeight: "100px",
    };
  }

  render() {
    return (
      <iframe
        style={{
          width: "100%",
          height: this.state.iFrameHeight,
          overflow: "visible",
        }}
        onLoad={() => {
          const obj = ReactDOM.findDOMNode(this);
          setInterval(() => {
            obj.contentWindow.postMessage("heightPls", "*");
          }, 100);
          window.addEventListener(
            "message",
            (event) => {
              if ("height" in event.data) {
                this.setState({
                  iFrameHeight: event.data.height,
                });
              }
            },
            false
          );
        }}
        ref="iframe"
        src={`https://${location.host}/endsong_mail_generator.html?framed=true`}
        width="100%"
        allow="clipboard-read; clipboard-write"
        height={this.state.iFrameHeight}
        scrolling="no"
        frameBorder="0"
      />
    );
  }
}
