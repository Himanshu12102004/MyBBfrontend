const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  const email = document.querySelector("#userId").value;
  const phone = document.querySelector("#mobileNo").value;
  const password2 = document.querySelector("#password").value;
  const name = document.querySelector("#name").value;
  const submit = document.querySelector("#submit");

  const body = { email, password: password2, name, phone };
  console.log(body);
  let res;
  e.preventDefault();
  try {
    res = await fetch("https://bestbrains.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    localStorage.setItem("token", data.token);
    // console.log(data);
    if (data.error) {
      alert(
        "password error:" +
          data.error.password +
          "\nemail Error:" +
          data.error.email +
          "\nphone error:" +
          data.error.phone
      );
    }
    const div = document.createElement("div");
    div.innerHTML = data.user.name;
    document.querySelector("body").appendChild(div);

    if (data.success) {
      localStorage.setItem("otpToken", data.otpToken);
      console.log(data);
      location.href = "/otpPage.html";
    }
  } catch (e) {
    console.log(e);
  }
});
