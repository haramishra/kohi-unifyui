import "./style.css";

window.addEventListener("message", (event) => {
  if (event.data.type === "requestIframeContent") {
    const bodyContent = document.body.innerHTML;
    window.parent.postMessage(
      { type: "iframeContent", content: bodyContent },
      event.origin
    );
  }
});
