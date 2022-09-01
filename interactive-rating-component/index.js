(function () {
  let rating = 0;
  const submitButton = document.querySelector(".rating__submit");
  const ratingOptions = document.querySelectorAll(".rating__list-item");

  function renderResultLabel() {
    const resultLabel = document.querySelector('.result__label');
    resultLabel.innerHTML = `You selected ${rating} out of ${ratingOptions.length}`;
  }

  function handleSubmit() {
    if (!rating) return;

    renderResultLabel();

    const ratingStep = document.querySelector(".rating-step");
    const resultStep = document.querySelector(".result-step");

    ratingStep.classList.remove("visible");
    resultStep.classList.add("visible");
  }

  function resetSelectedRating() {
    const selectedRating = document.querySelector('.rating__list-item--active');
    if (!selectedRating) return;
    selectedRating.classList.remove('rating__list-item--active');
  }

  function setRating({ target }) {
    resetSelectedRating();
    rating = target.innerText;
    target.classList.add('rating__list-item--active');
  }

  submitButton.addEventListener("click", handleSubmit);
  ratingOptions.forEach((ratingOption) => {
    ratingOption.addEventListener("click", setRating);
  });
})();
