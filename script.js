// Add JavaScript code here
const list = document.getElementById("songList")
const form = document.getElementById("form")
let song = document.getElementById("song")
let name = document.getElementById("name")
let artist = document.getElementById("artist")

const printSong = () =>{
  console.log(name.value + " requested \"" + song.value + " by " + artist.value + "\"")
  event.preventDefault()
}

form.addEventListener('submit', printSong)

const addSong = () =>{
  event.preventDefault()
  let item = document.createElement('p')
  item.textContent = name.value + " requested \"" + song.value + " by " + artist.value + "\""
  list.appendChild(item)
  name.value = ""
  song.value = ""
  artist.value = ""
}

let count = 0
let max = 1
const handleSongRequests = () =>{
  event.preventDefault()
  let password = document.getElementById("pass")
  if(password.value === "narwhals777"){
    max = 3
  }
  if(count < max && song.value !== "" && artist.value !== "") {
    addSong()
    count += 1
  }
}

form.addEventListener('submit', handleSongRequests)



