function onUrlChange() {
  const allLeftDivs = document.querySelectorAll(
    '#memex-project-view-root div[data-portal-root][data-color-mode][data-light-theme][data-dark-theme] > div > div > div[style^="left"]' +
      ':not([data-testid="roadmap-today-marker"])' +
      ':not([data-testid="iteration-marker-line"])' +
      ':not([data-testid="custom-date-marker-line"])' +
      ':not([data-testid="milestone-marker-line"])' +
      ':not([role="row"])'
  );

  if (allLeftDivs.length === 0) return;

  for (let i = 0; i < 53; i++) {
    allLeftDivs[i].dataset.holidaysColorizer = "true";
  }
}

const observeUrlChanges = () => {
  let lastUrl = location.href;

  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      onUrlChange();
    }
  }).observe(document, { subtree: true, childList: true });
};

observeUrlChanges();
onUrlChange();
