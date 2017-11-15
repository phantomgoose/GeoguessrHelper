// when the extension icon is clicked, get the game token from site's local storage (via token_retriever.js)
// then update the pin/link (via pin_placer.js) using the location info we retrieved via the API call
chrome.browserAction.onClicked.addListener(function(tab) {
    let guessr_tab = tab.id;

    chrome.tabs.sendMessage(
        guessr_tab,
        { method: "get-geoguessr-token" },
        function(res) {
            $.get("https://geoguessr.com/api/v3/games/" + res.token, function(
                data
            ) {
                let lat = data.rounds[data.round - 1].lat;
                let lng = data.rounds[data.round - 1].lng;
                if (lat && lng) {
                    let loc = { lat: lat, lng: lng };
                    chrome.tabs.sendMessage(guessr_tab, {
                        method: "place-pin",
                        data: loc
                    });
                }
            });
        }
    );
});
