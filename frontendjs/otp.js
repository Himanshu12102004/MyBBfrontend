const submit = document.querySelector("button");
console.log("efehf");
submit.addEventListener("click", async () => {
  const otp = document.querySelector("input").value;
  console.log(otp);
  body = { otp };
  const res = await fetch(
    "https://betterbrains-mamp.onrender.com/authorizeUser",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authentication: `Bearer ${localStorage.getItem("otpToken")}`,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  if (data.success) {
    localStorage.setItem("token", data.token);
    alert("congrats your email has been verified");
    location.href = "/";
  } else if (data.success === false) {
    alert("wrong otp");
  }
});
let user;
const fetchUser = async () => {
  try {
    user = await fetch("https://betterbrains-mamp.onrender.com/resendOtp", {
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem("otpToken")}`,
      },
    });
    console.log(await user.json());
    alert("otp Resent successfully");
  } catch (err) {
    alert("re enter the crediantials the resend link has expired");
  }
};

document.getElementById("resendOtp").addEventListener("click", async () => {
  fetchUser();
});
