let user;
// Parse the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

// Use the token and user info as needed
console.log(token);
if (token) {
  localStorage.setItem("token", token);
}
const fetchUser = async () => {
  try {
    user = await fetch("https://bestbrains.onrender.com/myCourses", {
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("otpToken")}`,
      },
    });

    const userInfo = await user.json();
    console.log(userInfo);
    document.getElementById("name").innerHTML = userInfo.name;
    console.log(userInfo.boughtCourses.length);
    if (userInfo.boughtCourses.length) location.href = "/myCourses.html";
    if (userInfo.success === false) {
      alert(userInfo.message);
    }
  } catch (err) {
    console.log(err);
    alert("user not verified");
  }
};
fetchUser();
