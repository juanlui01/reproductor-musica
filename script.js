
let songs = undefined



function buildSongHtml(song) {
  let div = document.createElement('div')
  div.setAttribute('class', " song-item flex hover:bg-slate-100 transition-all cursor-pointer py-3 px-1 gap-5 items-center text-white hover:text-black  ")
  div.addEventListener('click', function () {
    //setear la cancion en el elemento audio*
    const audioElement = document.getElementById('audio')
    audioElement.setAttribute('src', song.path.audio)
    audioElement.play()
    //setear informacion de la cancion en el reproductor//
    document.getElementById('audio-player-image').setAttribute('src', song.path.front)
    document.getElementById('audio-player-song').innerHTML = `${song.title} - ${song.album}`
    document.getElementById('audio-player-author').innerHTML = song.author

  })
  

  div.innerHTML = `
                <div class="song-info">   
                  <img src="${song.path.front}" alt="" class="h-16">
                 <div>
                     <p class="font-bold">${song.title}</p>
                      <p class="opacity-60">${song.author}</p>
                 </div>
                </div>

                <span class="play-icon">  </span>
                
            `
  return div
}

function buildMainHtml(songs) {
  songs.forEach(song => {
    const element = buildSongHtml(song)

    document.getElementById('songs').appendChild(element)
  });
}

function getSongs() {
  return axios.get('https://leonardoapi.onrender.com/songs')
    .then(function (response) { return Promise.resolve(response.data.songs) })
    .catch((error) => {
      console.error("Ha ocurrido un error al solicitar las canciones", error)
      return Promise.reject(error)
    })
}

function initPlayer() {
  getSongs()
    .then(function (songsFromApi) {
      songs = songsFromApi
      buildMainHtml(songs)
      initEventListeners()
    })


}

function initEventListeners() {
  const audio = document.getElementById('audio')
  document.getElementById('play-btn').addEventListener('click', () => audio.play())
  document.getElementById('pause-btn').addEventListener('click', () => audio.pause())
  document.getElementById('stop-btn').addEventListener('click', () => audio.pause())
}

initPlayer()