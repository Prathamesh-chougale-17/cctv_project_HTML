function addCamera() {
  // Create a new HTML element for the camera.
  var camera = document.createElement("div");
  // Add the camera to the DOM.
  document.body.appendChild(camera);
  // Add the camera's name to the DOM.
  var cameraName = document.createElement("input");
  cameraName.setAttribute("type", "text");
  cameraName.setAttribute("placeholder", "Camera Name");
  camera.appendChild(cameraName);
}
