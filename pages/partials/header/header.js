fetch("./../../../pages/partials/header/header.html")
        .then(res => res.text())
        .then(html => {
        document.getElementById("header-placeholder").innerHTML = html;
            
            // Menú responsive + cierre automático
            (function () {
                const toggle = document.querySelector('.nav-toggle');
                const nav = document.getElementById('primary-nav');

                if (toggle && nav) {
                // Abrir/cerrar con hamburguesa
                toggle.addEventListener('click', function (e) {
                    e.stopPropagation(); // evita que dispare el "click fuera"
                    const open = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', String(!open));
                    nav.classList.toggle('is-open');
                });

                // Cerrar al hacer clic en un enlace
                nav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                    nav.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    });
                });

                // Cerrar al hacer clic fuera del menú
                document.addEventListener('click', (e) => {
                    if (
                    nav.classList.contains('is-open') &&
                    !nav.contains(e.target) &&
                    !toggle.contains(e.target)
                    ) {
                    nav.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    }
                });

                // (Opcional) Cerrar al hacer scroll
                window.addEventListener('scroll', () => {
                    if (nav.classList.contains('is-open')) {
                    nav.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    }
                });
                }  
            })();
                        
        });
