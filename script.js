



// let cancion = {
//     _id: "Abba" ,
//     title: "Waterloo Deluxe-Edition",
//     album: "Waterloo",
//     author: "Abba"
    


// }

// let MiFuncion = (numero) => {
//     cancion.album += numero
// }

// MiFuncion (5)
// MiFuncion (5)
console.log(axios)


axios.get('https://leonardoapi.onrender.com/songs')
    .then(function (response) {
        // handle success
        response.data.songs.map((song) => {
            let div = document.createElement('div')
            div.setAttribute('class', "flex hover:bg-slate-100 transition-all cursor-pointer py-3 px-1 gap-5 items-center")

            div.innerHTML = `
                <img src="${song.path.front}" alt="" class="h-16">
                <div>
                    <p class="font-bold">${song.title}</p>
                    <p class="opacity-60">${song.author}</p>
                </div>
            `


            document.getElementById('container').appendChild(div)
        })
    })