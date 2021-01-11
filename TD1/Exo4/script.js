document.getElementById("touch").addEventListener(
  "touchstart",
  function (e) {
    if (
      e.type == "touchstart" ||
      e.type == "touchmove" ||
      e.type == "touchend" ||
      e.type == "touchcancel"
    ) {
      var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
      document.write("Coordonnées du toucher: <br>");
      document.write("Abscisse: " + x + "<br>");
      document.write("Ordonnée: " + y + "<br>");
      document.write("<br>Type du toucher: <br>");
      document.write(e.type);
    }
  },
  false
);