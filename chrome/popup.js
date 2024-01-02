document.addEventListener('DOMContentLoaded', function () {
    var goButton = document.getElementById('goButton');
    var urlInput = document.getElementById('urlInput');

    function openOrderSearch() {
        var inputQuery = urlInput.value.trim();

        if (inputQuery !== '') {
            // Construct the Fluent Order URL
            var fluentOrderURL = 'https://emmasleep.apps.fluentcommerce.com/oms/#/orders?orders_ref=%25' + encodeURIComponent(inputQuery) + '%25';

            // Open a new tab with the constructed order URL
            chrome.tabs.create({
                url: fluentOrderURL
            });
        }
    }

    goButton.addEventListener('click', openOrderSearch);

    urlInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            openOrderSearch();
        }
    });
});
