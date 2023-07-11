const myCourse = localStorage.getItem("course");
console.log(myCourse);
const fetchCourse = async () => {
  const schedule = await fetch(
    `https://betterbrains-mamp.onrender.com/schedule?course=${myCourse}`,

    {
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("otpToken")}`,
      },
    }
  );
  const response = await schedule.json();
  console.log(response);
};
fetchCourse();
console.log("tftu");
