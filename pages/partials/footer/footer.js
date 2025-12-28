fetch("/pages/partials/footer/footer.html")
    .then(res => res.text())
    .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
        document.getElementById('year').textContent = new Date().getFullYear();
    });
