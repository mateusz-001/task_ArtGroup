const tabs = document.querySelectorAll(".donate__button");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("donate__button--active");
    });
    tab.classList.add("donate__button--active");
  });
});
