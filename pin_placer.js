$("body").prepend("<h4 id='location-helper'>Click the extension button to get your location.</h4>")

// adds a link at the top of the page to the location of the current puzzle; ideally this would just place a pin directly on the map, but that seems... challenging
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    if (req.method == "place-pin") {
        let loc = req.data;
        $("#location-helper").html(`Give up? Open <a href='https://www.google.com/maps/?q=${loc.lat},${loc.lng}'>this link</a> in a new tab to see where you're corrently located! Remember to hit the extension button to refresh this location.`);
    }
});