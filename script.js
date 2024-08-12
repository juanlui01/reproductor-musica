
let songs = undefined



function buildSongHtml(song) {
  let div = document.createElement('div')
  div.setAttribute('class', " song-item flex hover:bg-slate-100 transition-all cursor-pointer py-3 px-1 gap-5 items-center text-white hover:text-black ")

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

    })


}







// const songs = [
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/panicatthedisco_houseofmemories.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/panicatthedisco_houseofmemories.jpg"
//         },
//         _id: "63e54b2e7c38342067355300",
//         title: "House Of Memories",
//         album: "Death of a Bachelor",
//         duration: "3:30",
//         author: "Panic At The Disco"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/greenday_boulevardofbrokendreams.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/greenday_boulevardofbrokendreams.jpg"
//         },
//         _id: "63e5599b7c38342067355305",
//         title: "Boulevard of Broken Dreams",
//         album: "American Idiot",
//         author: "Green Day",
//         duration: "4:22"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/onerepublic_countingstars.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/onerepublic_countingstars.jpg"
//         },
//         _id: "63e55bf57c38342067355307",
//         title: "Counting Stars",
//         album: "Native",
//         author: "OneRepublic",
//         duration: "4:17"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/catherinefeeny_mrblue.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/catherinefeeny_mrblue.jpg"
//         },
//         _id: "63e545d97c383420673552f4",
//         title: "Mr Blue",
//         album: "Mr Blue",
//         duration: "3:03",
//         author: "Catherine Feeny"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/theweeknd_blindinglights.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/theweeknd_blindinglights.jpg"
//         },
//         _id: "63e55e8c7c3834206735530a",
//         title: "Blinding Lights",
//         album: "Blinding Lights",
//         author: "The Weeknd",
//         duration: "3:22"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/inthevalleybelow_peaches.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/inthevalleybelow_peaches.jpg"
//         },
//         _id: "63e549827c383420673552fc",
//         title: "Peaches",
//         album: "The Belt",
//         duration: "4:47",
//         author: "In The Valley Below"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/oliviarodrigo_favoritecrime.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/oliviarodrigo_favoritecrime.jpg"
//         },
//         _id: "63f446d7feccc52c021c729b",
//         title: "Favorite Crime",
//         album: "Sour",
//         author: "Olivia Rodrigo",
//         duration: "3:05"
//       },
//       {
//         path: {
//           audio: "https://leonardoapi.onrender.com/assets/music/audio/thesmiths_panic.mp3",
//           front: "https://leonardoapi.onrender.com/assets/music/img/thesmiths_panic.jpg"
//         },
//         _id: "63e55d467c38342067355308",
//         title: "Panic",
//         album: "The World Won't Listen",
//         author: "The Smiths",
//         duration: "2:22"
//       }

//     ]

initPlayer()