document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <header>
        <nav>
            <div class="logo">
                <a href="index.html"><img src="assets/logo.png" alt="Logo"></a>
            </div>
            <div class="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="nav-list">
                <li><a href="index.html">Početna</a></li>
                <li>
                    <a href="#">Wood & Epoxy</a>
                    <ul class="dropdown-menu">
                        <li><a href="stolovi.html">Stolovi</a></li>
                        <li><a href="proizvodi.html">Unikatni Proizvodi</a></li>
                    </ul>
                </li>
                <li>
                    <a href="Software.html">Software</a>
                    <ul class="dropdown-menu">
                        <li><a href="Software.html#probe">ProbeXYZ - UCCNC plugin</a></li>
                        <li><a href="macros.html">Custom M-Code Macros</a></li>
                    </ul>
                </li>
                <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>
    `;

    // Umetanje navigacije na vrh stranice
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Automatsko pokretanje mobilnog hamburger menija
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});