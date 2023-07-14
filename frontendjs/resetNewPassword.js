const submit = document.querySelector("#resetPassword");
console.log("efehf");
submit.addEventListener("click", async () => {
  const newPassword = document.querySelector("#newPassword").value;
  body = { newPassword };
  const res = await fetch("https://bestbrains.onrender.com/newPassword", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
      Authentication: `Bearer ${localStorage.getItem("resetPasswordToken")}`,
    },
  });
  const data = await res.json();
  console.log(data);
  console.log(data);
  if (data.success) {
    location.href = "/login.html";
  } else if (data.success === false) {
    alert(
      "Password reset has been done or time is over reiterate the whole process"
    );
  }
});
