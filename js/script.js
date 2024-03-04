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

function toggleImage() {
    var imageElement = document.getElementById('personalImage');

    if (imageElement.src.endsWith('images/pic2.png')) {
        imageElement.src = 'images/pic3.webp';
    } else {
        imageElement.src = 'images/pic2.png';
    }
}