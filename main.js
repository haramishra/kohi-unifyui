import "./style.css";

console.log("Hello from main.js");

window.onload = () => {
  const bodyContent = document.body.innerHTML;
  window.parent.postMessage(
    { type: "iframeContent", content: bodyContent },
    "*"
  );
};
