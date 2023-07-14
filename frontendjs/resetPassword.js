document.getElementById("submit").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  console.log(email);
  const fetchedToken = await fetch(
    "https://bestbrains.onrender.com/changePasswordOtp",
    {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await fetchedToken.json();
  console.log(data);
  if (data.token) {
    location.href = "/otpPageForPasswordReset.html";
    localStorage.setItem("resetPasswordToken", data.token);
  } else alert(data.message);
});
