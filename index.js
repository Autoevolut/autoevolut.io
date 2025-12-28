document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.getElementById("h2-titlediv");
    const text = h1.textContent;
    h1.textContent = "";  // limpiar texto inicialmente
    h1.classList.add("blinking"); // añadir cursor parpadeante

    let i = 0;
    function typeLetter() {
        if (i < text.length) {
        h1.textContent += text[i];
        i++;
        setTimeout(typeLetter, 130); // velocidad de escritura (ms)
        }
    }

    typeLetter();
    });
