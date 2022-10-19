const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

const getAdvice = async () => {
  const apiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(apiUrl, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Api connection problem");
    }
    const responseJson = await response.json();
    const data = responseJson.slip;

    adviceId.textContent = `ADVICE #${data.id}`;
    adviceText.textContent = `“${data.advice}”`;
  } catch (e) {
    console.error(e);
  }
};

btn.addEventListener("click", () => {
  getAdvice();
});
