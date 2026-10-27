(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();



document.addEventListener("DOMContentLoaded", () => {
  // Tax toggle
  const taxSwitch = document.getElementById("switchCheckDefault");

  function updateTaxPrices() {
    if (!taxSwitch) return;

    document.querySelectorAll(".tax-info").forEach((info) => {
      info.classList.toggle("show", taxSwitch.checked);
    });
  }

  if (taxSwitch) {
    taxSwitch.addEventListener("change", updateTaxPrices);
    updateTaxPrices();
  }

  // Favorite button visual toggle
  document.querySelectorAll(".listing-heart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const icon = button.querySelector("i");
      if (!icon) return;

      const isFavorite = button.getAttribute("aria-pressed") !== "true";

      button.setAttribute("aria-pressed", String(isFavorite));
      button.classList.toggle("is-favorite", isFavorite);
      icon.classList.toggle("fa-solid", isFavorite);
      icon.classList.toggle("fa-regular", !isFavorite);
    });
  });
});
