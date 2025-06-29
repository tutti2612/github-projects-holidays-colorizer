console.log("Holidays Colorizer for GitHub Projects is running...");

const allLeftDivs = document.querySelectorAll(
  '#memex-project-view-root div[data-portal-root][data-color-mode][data-light-theme][data-dark-theme] > div > div > div[style^="left"]' +
    ':not([data-testid="roadmap-today-marker"])' +
    ':not([data-testid="iteration-marker-line"])' +
    ':not([data-testid="custom-date-marker-line"])' +
    ':not([data-testid="milestone-marker-line"])' +
    ':not([role="row"])'
);

for (const div of allLeftDivs) {
  div.dataset.holidaysColorizer = "true";
}

allLeftDivs[allLeftDivs.length - 1].dataset.holidaysColorizer = "last";
