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
    if (userInfo.success === false) {
      alert(userInfo.message);
    }
    console.log(userInfo);
    userInfo.boughtCourses.forEach((myCourse) => {
      const course = document.createElement("div");
      course.innerHTML = myCourse;
      course.addEventListener("click", async () => {
        localStorage.setItem("course", myCourse);
        location.href = "/coursePage.html";
      });
      console.log(typeof document.getElementById("course"));
      document.querySelector("#course").appendChild(course);
    });
    userInfo.testLive.forEach((elem) => {
      console.log("fe");
      const liveTest = document.createElement("div");
      liveTest.addEventListener("click", () => {
        localStorage.setItem("course", elem.course);
        localStorage.setItem("test", elem.test);
        location.href = "/testInterFace.html";
      });
      liveTest.innerHTML = elem.course + " " + elem.test;
      document.getElementById("liveTest").appendChild(liveTest);
    });

    const name = document.getElementById("name");
    name.innerHTML = userInfo.name;
  } catch (err) {
    console.log(err);
  }
};
fetchUser();
