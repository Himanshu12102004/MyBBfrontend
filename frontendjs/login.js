const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  const email = document.querySelector("#userId").value;
  const password2 = document.querySelector("#password").value;

  const body = { email, password: password2 };
  console.log(body);
  let res;
  e.preventDefault();
  try {
    res = await fetch("https://bestbrains.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    console.log(data.success);
    localStorage.setItem("token", data.token);
    const coursesBought = data.User.boughtCourses;
    if (data.success == true && coursesBought.length === 0) {
      location.assign("/");
    } else if (coursesBought.length !== 0) {
      console.log("hhhth");
      window.location.href = "/myCourses.html";
    }
    // console.log(data);
  } catch (e) {
    alert("invalid email or password");
    const error = document.createElement("div");
    error.innerHTML = "Invalid Email or password";
    console.log(e);
  }
});
