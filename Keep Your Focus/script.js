const countButton = document.getElementById("countButton");
countButton.addEventListener("click" , function() {
    const count = document.getElementById("count");
    let countNumber = Number(count.innerHTML);
    countNumber++;
    count.innerHTML = countNumber;
    console.log(countNumber)
})



const music1 = document.getElementById("music-1")
const sunIcon = document.getElementById("sun")

sunIcon.addEventListener("click" , function() {
    if (music1.paused) {
        music1.play()
        sunIcon.className = "bi bi-music-note fs-1"
    } else {
        music1.pause()
        sunIcon.className = "bi bi-brightness-high-fill fs-1"
    } 
})


const music2 = document.getElementById("music-2")
const cloudIcon = document.getElementById("cloud")

cloudIcon.addEventListener("click" , function() {
    if (music2.paused) {
        music2.play()
        cloudIcon.className = "bi bi-music-note fs-1 ms-3"
    } else {
        music2.pause()
        cloudIcon.className = "bi bi-cloud-drizzle fs-1 ms-3"
    } 
})


const music3 = document.getElementById("music-3")
const heartIcon = document.getElementById("heart")

heartIcon.addEventListener("click" , function() {
    if (music3.paused) {
        music3.play()
        heartIcon.className = "bi bi-music-note fs-1 ms-3"
    } else {
        music3.pause()
        heartIcon.className = "bi bi-chat-square-heart fs-1 ms-3"
    } 
})


const volume = document.getElementById("volume")
volume.addEventListener("input" , function() {
    music1.volume = volume.value / 100
    music2.volume = volume.value / 100
    music3.volume = volume.value / 100
})