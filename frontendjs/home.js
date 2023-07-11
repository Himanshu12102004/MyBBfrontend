let user;
const fetchUser = async () => {
  try {
    user = await fetch("https://betterbrains-mamp.onrender.com/myCourses", {
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
