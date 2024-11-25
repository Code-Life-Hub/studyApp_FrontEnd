function ShowPsw() {
  const x = document.getElementById("password");
  if (x) {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } else {
    console.error("Element with ID 'password' not found");
  }
}

export default ShowPsw;
