//your JS code here. If required.
(function () {
  const form = document.getElementById("login-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  function credsExist() {
    return localStorage.getItem("username") && localStorage.getItem("password");
  }

  function updateExistingVisibility() {
    existingBtn.style.display = credsExist() ? "block" : "none";
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Ensure initial expectations: empty fields & unchecked checkbox
    username.value = "";
    password.value = "";
    rememberCheckbox.checked = false;
    updateExistingVisibility();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = username.value.trim();
    const password = password.value;

    alert(Logged in as ${username});

    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    updateExistingVisibility();
  });

  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(Logged in as ${savedUsername});
    }
  });
})();