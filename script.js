function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(element => {
        fetch(element.getAttribute('data-include'))
            .then(response => response.text())
            .then(html => {
                element.innerHTML = html;
            });
    });
}
document.addEventListener('DOMContentLoaded', includeHTML);