document.getElementById("block").addEventListener("click", function () {
  const website = document.getElementById("website").value;
  chrome.storage.sync.get("blockedSites", (data) => {
    const blockedSites = data.blockedSites || [];
    blockedSites.push(website);
    chrome.storage.sync.set({ blockedSites });
  });
  displayBlockedSites();
});

function displayBlockedSites() {
  chrome.storage.sync.get("blockedSites", (data) => {
    const blockedSites = data.blockedSites || [];
    const ul = document.getElementById("blocked-sites");
    ul.innerHTML = "";
    blockedSites.forEach((site) => {
      const li = document.createElement("li");
      li.textContent = site;
      ul.appendChild(li);
    });
  });
}

displayBlockedSites();
