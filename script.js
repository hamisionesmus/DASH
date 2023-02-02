function loadHtml(id, filename) {
  let xhttp; // variable for ajax request
  let element = document.getElementById(id);
  let file = filename;
  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          element.innerHTML = this.responseText;
        }
        if (this.status === 404) {
          element.innerHTML = "<h1>404 Not Found</h1>";
        }
      }
    };
    xhttp.open("GET", `template/${file}`, true);
    xhttp.send();
    return;
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("content").innerHTML = this.responseText;
    //   }
    // };
    // xhttp.open("GET", "content.html", true);
    // xhttp.send();
  }
}
