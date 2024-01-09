document.addEventListener('DOMContentLoaded', function () {
    var goButton = document.getElementById('searchButton');
    var urlInput = document.getElementById('queryInput');

    function openOrderSearch() {
        var inputQuery = urlInput.value.trim();

        if (inputQuery !== '') {
            // Split input by spaces
            var inputParts = inputQuery.split(" ");

            // Create multi-input URL
            var fluentOrderURL = 'https://emmasleep.apps.fluentcommerce.com/oms/#/orders?';

            // Add orders_ref parameters for each part
            for (var i = 0; i < inputParts.length; i++) {
                fluentOrderURL += 'orders_ref[]=%25' + encodeURIComponent(inputParts[i]) + '%25';

                // Add '&' between parameters, except for the last one
                if (i < inputParts.length - 1) {
                    fluentOrderURL += '&';
                }
            }

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

    // Set focus on the input field when the popup is opened
    urlInput.focus();
});
