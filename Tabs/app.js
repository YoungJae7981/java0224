const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.id;
    articles.forEach((article) => {
      article.classList.remove("active");
      if (article.id === id) {
        article.classList.add("active");
      }
    });
  });
});
