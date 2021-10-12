var i = 0, text;
text = "Halo aku Nanda! Cuma anak muda biasa yang kebetulan angkatan 2020. 1st Gen Lulusan Corona🎓"

function writing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(writing, 80);
    }
}
writing();