if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
  } else {
    console.log("Le navigateur ne supporte pas l'évènement deviceorientation")
  }