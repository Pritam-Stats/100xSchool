(() => {
  const canvas = document.getElementById("graph-bg");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawGraph() {
    const { width, height } = canvas;
    const gap = 36;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(58, 123, 253, 0.12)";
    ctx.lineWidth = 1;

    for (let x = 0; x <= width; x += gap) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += gap) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Template JS entry point for future interactions.
  function init() {
    resize();
    drawGraph();
  }

  window.addEventListener("resize", init);
  init();
})();
