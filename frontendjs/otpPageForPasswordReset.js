const submit = document.querySelector("button");
console.log("efehf");
submit.addEventListener("click", async () => {
  const otp = document.querySelector("input").value;
  console.log(otp);
  body = { otp };
  const res = await fetch(
    "https://bestbrains.onrender.com/changePasswordOtpCheck",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authentication: `Bearer ${localStorage.getItem("resetPasswordToken")}`,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  if (data.success) {
    localStorage.setItem("token", data.token);
    location.href = "/resetNewPassword.html";
  } else if (data.success === false) {
    alert("wrong Otp");
  }
});
