document.addEventListener('DOMContentLoaded', function () {
    var lastUpdated = document.lastModified;
    document.getElementById('lastUpdated').textContent = lastUpdated;
});

document.addEventListener('DOMContentLoaded', (event) => {
    var user = 'jklohmus';
    var domain = 'unc.edu';
    var element = document.getElementById('emailPlaceholder');
    element.innerHTML = '<a style="color:white" href="mailto:' + user + '@' + domain + '">Contact Me</a>';
});