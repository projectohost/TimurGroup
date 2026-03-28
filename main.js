function showSection(id) {
    let sound = document.getElementById("clickSound");

    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }

    document.getElementById("story").style.display = "none";
    document.getElementById("characters").style.display = "none";
    document.getElementById("about").style.display = "none";

    document.getElementById(id).style.display = "block";
}