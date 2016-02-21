//execute only on chrome image viewer
if (document.body && document.body.children && document.body.children.length === 1) {
  var img = document.body.children[0];
  if (img.tagName === "IMG" && img.style["-webkit-user-select"] === "none") {
    document.body.className = "extension-center-activated";
  }
}
