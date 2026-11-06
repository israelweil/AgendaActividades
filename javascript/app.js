// Modelo de datos principal de la agenda.
let activities = [];

const form = document.querySelector("#activity-form");
const titleInput = document.querySelector("#activity-title");
const dateInput = document.querySelector("#activity-date");
const categoryInput = document.querySelector("#activity-category");
const list = document.querySelector("#activity-list");
const count = document.querySelector("#activity-count");
const emptyMessage = document.querySelector("#empty-message");
const statusMessage = document.querySelector("#status-message");
const errorMessage = document.querySelector("#form-error");
const activityPreview = document.querySelector("#activity-preview");
const categories = ["Personal", "Trabajo", "Estudio", "Bienestar"];
const themeToggle = document.querySelector("#theme-toggle");

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.textContent = isDark ? "Modo claro" : "Modo oscuro";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

setTheme(localStorage.getItem("agenda-theme") || "light");
themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("agenda-theme", isDark ? "dark" : "light");
  setTheme(isDark ? "dark" : "light");
});

function saveActivities() {
  localStorage.setItem("activities", JSON.stringify(activities));
}

function showMessage(message) {
  statusMessage.textContent = message;
  statusMessage.hidden = message === "";
  statusMessage.classList.toggle("message-visible", message !== "");
}

function validateForm() {
  const title = titleInput.value.trim();
  const date = dateInput.value;
  const category = categoryInput.value;
  const isValidDate = date !== "" && !Number.isNaN(Date.parse(date));
  const isValidCategory = categories.includes(category);
  const isValid = title !== "" && isValidDate && isValidCategory;

  titleInput.classList.toggle("invalid", title === "");
  dateInput.classList.toggle("invalid", !isValidDate);
  categoryInput.classList.toggle("invalid", !isValidCategory);
  errorMessage.textContent = isValid ? "" : "Escribe una actividad y selecciona una fecha y categoría válidas.";
  return isValid;
}

function updatePreview() {
  const title = titleInput.value.trim();
  const date = dateInput.value;
  const category = categoryInput.value;
  const hasContent = title !== "" || date !== "" || category !== "";

  activityPreview.hidden = !hasContent;
  if (hasContent) {
    activityPreview.textContent = `Vista previa: ${title || "Actividad"} · ${date || "Sin fecha"} · ${category || "Sin categoría"}`;
  }
}

function clearValidation() {
  titleInput.classList.remove("invalid");
  dateInput.classList.remove("invalid");
  categoryInput.classList.remove("invalid");
  errorMessage.textContent = "";
  updatePreview();
}

function renderActivities() {
  list.textContent = "";
  emptyMessage.hidden = activities.length > 0;
  count.textContent = `${activities.length} ${activities.length === 1 ? "actividad" : "actividades"}`;

  activities.forEach(function (activity) {
    const item = document.createElement("li");
    const details = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const deleteButton = document.createElement("button");

    item.classList.add("activity-item");
    title.textContent = activity.title;
    description.textContent = `${activity.date} · ${activity.category}`;
    description.classList.add("activity-details");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      activities = activities.filter(function (savedActivity) {
        return savedActivity.id !== activity.id;
      });
      saveActivities();
      renderActivities();
      showMessage("Actividad eliminada.");
    });

    details.append(title, description);
    item.append(details, deleteButton);
    list.append(item);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    showMessage("");
    return;
  }

  activities.push({
    id: Date.now(),
    title: titleInput.value.trim(),
    date: dateInput.value,
    category: categoryInput.value
  });
  saveActivities();
  renderActivities();
  form.reset();
  clearValidation();
  showMessage("Actividad agregada a tu agenda.");
});

form.addEventListener("input", function () {
  validateForm();
  updatePreview();
});
form.addEventListener("change", function () {
  validateForm();
  updatePreview();
});

document.querySelector("#btn-reset").addEventListener("click", function () {
  form.reset();
  clearValidation();
  showMessage("Campos limpios.");
});

// Recupera la agenda guardada al abrir la página.
const savedActivities = localStorage.getItem("activities");
if (savedActivities) {
  try {
    activities = JSON.parse(savedActivities);
    if (!Array.isArray(activities)) activities = [];
  } catch {
    activities = [];
  }
}
renderActivities();
