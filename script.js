function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }


    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "assets/avatar-light.png")
    } else {
        img.setAttribute("src", "assets/avatar.png")
    }

    if(html.classList.contains("light")) {
        img.setAttribute("alt", "APAGA A LUZ, POR FAVOR!")
    } else {
        img.setAttribute("alt", "Foto Fabiano Dev")
    }
}