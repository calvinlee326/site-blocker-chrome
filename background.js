const blockedSites = [];

// from chrome.storage.sync 獲取 blockedSites list
chrome.storage.sync.get("blockedSites", (data) => {
    if (data.blockedSites) {
        blockedSites.push(...data.blockedSites);
    } 
});

// 監聽all request, 如果url在blockedSites裡面, 就取消請求
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = new URL(details.url);
        return {cancel: blockedSites.includes(url.hostname)};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);