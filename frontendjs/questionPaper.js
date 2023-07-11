let questionPaper;
const fetchTest = async () => {
  console.log(localStorage.getItem("course"), localStorage.getItem("test"));
  const test = await fetch(
    `https://betterbrains-mamp.onrender.com/test?course=${localStorage.getItem(
      "course"
    )}&test=${localStorage.getItem("test")}`,
    {
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("otpToken")}`,
      },
    }
  );
  questionPaper = await test.json();
  console.log(questionPaper);
  let j = 1;
  questionPaper.questionPaper.forEach((element) => {
    const question = document.createElement("div");
    question.innerHTML = element.question;
    const questionPellete = document.getElementById("questions");
    questionPellete.appendChild(question);
    const inputBox = document.createElement("input");

    for (let i = 0; i < element.options.length; i++) {
      const optionElem = document.createElement("div");
      optionElem.innerHTML = element.options[i];
      questionPellete.appendChild(optionElem);
    }
    inputBox.setAttribute("id", `q${j}`);
    j++;
    questionPellete.appendChild(inputBox);
    const option = document.createElement("div");
  });
};
document.getElementById("submit").addEventListener("click", async () => {
  const answersArray = [];
  for (let i = 0; i < questionPaper.questionPaper.length; i++) {
    answersArray.push(document.getElementById("q" + (i + 1)).value.split(","));
    console.log(document.getElementById("q" + (i + 1)).value);
  }
  console.log(answersArray);
  const a = { answers: answersArray };
  const body = { a: "dhu" };
  const result = await fetch(
    `http://localhost:3000/result?course=${localStorage.getItem(
      "course"
    )}&test=${localStorage.getItem("test")}`,
    {
      method: "POST",
      body: JSON.stringify({ answers: answersArray }),
      headers: {
        "Content-type": "application/json",
        Authentication: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("otpToken")}`,
      },
    }
  );
  console.log(await result.json());
});
fetchTest();
