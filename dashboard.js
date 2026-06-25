const siteList = document.querySelector("#siteList");
const clearSitesButton = document.querySelector("#clearSites");
const sites = JSON.parse(localStorage.getItem("siteforge-sites") || "[]");

function saveSites(nextSites) {
  localStorage.setItem("siteforge-sites", JSON.stringify(nextSites));
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function emptyState() {
  siteList.innerHTML = `
    <div class="empty-sites">
      <span>No sites yet</span>
      <p>Create your first site from a prompt. It will appear here automatically.</p>
      <a class="primary-button" href="builder.html">Create site</a>
    </div>
  `;
}

function renderSites() {
  siteList.innerHTML = "";

  if (!sites.length) {
    emptyState();
    return;
  }

  sites.forEach((site, index) => {
    const row = document.createElement("article");
    row.className = "site-row";
    row.innerHTML = `
      <div class="site-main">
        <span class="site-thumb">${site.name.charAt(0).toUpperCase()}</span>
        <div>
          <strong>${site.name}</strong>
          <p>${site.prompt}</p>
        </div>
      </div>
      <span>${site.type}</span>
      <span>${formatDate(site.updatedAt)}</span>
      <div class="site-actions">
        <span class="status-pill">${site.status}</span>
        <a href="builder.html?site=${encodeURIComponent(site.id)}">Edit</a>
        <button type="button" data-delete="${index}">Delete</button>
      </div>
    `;
    siteList.appendChild(row);
  });

  siteList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.delete);
      sites.splice(index, 1);
      saveSites(sites);
      renderSites();
    });
  });
}

renderSites();

clearSitesButton.addEventListener("click", () => {
  sites.splice(0, sites.length);
  saveSites(sites);
  renderSites();
});
