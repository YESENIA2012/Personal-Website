function mostrarHome() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("resume").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function mostrarResume() {
  document.getElementById("resume").style.display = "grid";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function mostrarProjects() {
  document.getElementById("projects").style.display = "grid";
  document.getElementById("home").style.display = "none";
  document.getElementById("resume").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function mostrarContact() {
  document.getElementById("contact").style.display = "flex";
  document.getElementById("home").style.display = "none";
  document.getElementById("resume").style.display = "none";
  document.getElementById("projects").style.display = "none";
}
