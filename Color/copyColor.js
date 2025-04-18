function copyColor() {
    var color = document.querySelector("#color").innerText;
    navigator.clipboard.writeText(color).then(() => {
        alert("Copied!");
    });
}
