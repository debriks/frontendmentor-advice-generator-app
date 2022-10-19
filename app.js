const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Api connection problem");
    }
    const responseJson = await response.json();
    const data = responseJson.slip;

    const id = `ADVICE #${data.id}`;
    const advice = `“${data.advice}”`;

    adviceId.textContent = id;
    adviceText.textContent = advice;
  } catch (e) {
    console.error(e);
  }
};

btn.addEventListener("click", () => {
  getAdvice();
});
