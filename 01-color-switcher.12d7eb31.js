!function(){var t,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyElement:document.body};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){n.bodyElement.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n.startBtn.disabled=!0})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.12d7eb31.js.map