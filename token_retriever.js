// - what is my purpose?
// - you retrieve the token from local storage
// - oh my god...
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    if (req.method === "get-geoguessr-token") {
        sendResponse({ token: localStorage["last-game-world"] });
    }
});