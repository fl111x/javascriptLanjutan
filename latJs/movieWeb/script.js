// metode ajax menggunakan jquery
// $(".btn-search").click(function () { 
//     $.ajax({
//         url: `http://www.omdbapi.com/?s=${$(".input-keyword").val()}&apikey=af080305`,
//         success: (results) => {
//             const movies = results.Search;
//             let cards = ``;
//             movies.forEach(movie => {
//                 cards += showCards(movie);
//             });
    
//             $(".container-movieList").html(cards);
    
//             $(".movie-details").click(function () { 
//                 $.ajax({
//                     url: `http://www.omdbapi.com/?i=${$(this).data("imdbid")}&apikey=af080305`,
//                     success: (m) => {
//                         const movieTitle =` <h1 class="modal-title fs-5" id="movieDetailsModalLabel">${m.Title} (${m.Year})</h1>`;
//                         const movieDetail = movieDetails(m)
//                         $(".modal-header").html(movieTitle);
//                         $(".modal-body").html(movieDetail);
//                     }
//                 });            
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText)
//         }
//     });
// });


// const searchBtn = document.querySelector(`.btn-search`);
// searchBtn.addEventListener(`click`, function () {
//     const keyword = document.querySelector(`.input-keyword`);
//     fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=af080305`)
//     .then(Response => Response.json())
//     .then(Response => {
//         const movies = Response.Search;
//         let cards = ``;
//         movies.forEach(m => {
//             cards += showCards(m);
//         });
//         const containerMovies = document.querySelector(`.container-movieList`);
//         containerMovies.innerHTML = cards;

//         const detailsBtn = document.querySelectorAll(`.movie-details`);
//         detailsBtn.forEach(btn => {
//             btn.addEventListener(`click`, function () {
//                 fetch(`http://www.omdbapi.com/?i=${this.dataset.imdbid}&apikey=af080305`)                
//                 .then(Response => Response.json())
//                 .then(Response => {
//                     const modalBody = document.querySelector(`.modal-body`);
//                     const modalHeader = document.querySelector(`.modal-header`);
//                     modalHeader.innerHTML =`<h1 class="modal-title fs-5" id="movieDetailsModalLabel">${Response.Title} (${Response.Year})</h1>`
//                     modalBody.innerHTML = movieDetails(Response);
//                 });
//             })
//         })
//     })


// })

// Fecth Refactor
const searchBtn = document.querySelector(`.btn-search`);
searchBtn.addEventListener(`click`,async function () {
    try {
        const keyword = document.querySelector(`.input-keyword`);
        const movies = await getMovies(keyword);
        updateUI(movies);
    } catch (error) {
        alert(error);
    }
})

// event binding
document.addEventListener(`click`,async function (e) {
    try {
        if (e.target.classList.contains(`movie-details`)) {
            const movieDetail = await getMovieDetails(e.target.dataset.imdbid);
            updateUIModal(movieDetail);
        }
    } catch (error) {
        alert(error)       
    }
})

function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=af080305`)
            .then(Response => {
                if(!Response.ok){
                    throw new Error(Response.statusText);
                }else{
                    return Response.json();
                }
            })
            .then(Response => {
                if (Response.Response === `False`) {
                    throw new Error(Response.Error);
                }else{
                    return Response.Search;
                }
            });
}

function getMovieDetails(id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=af080305`)
            .then(Response => {
                if (!Response.ok) {
                    throw new Error(Response.statusText)
                }else{
                    return Response.json();
                }
            })
            .then(Response => {
                if (Response.Response === `False`) {
                    throw new Error(`IMDB Error`);
                }else{
                    return Response;
                }
            })
}

function updateUIModal(movie) {
    const modalBody = document.querySelector(`.modal-body`);
    const modalHeader = document.querySelector(`.modal-header`);
    modalBody.innerHTML = movieDetails(movie);
    modalHeader.innerHTML = `<h1 class="modal-title fs-5" id="movieDetailsModalLabel">${movie.Title} (${movie.Year})</h1>`;
}

function updateUI(movies) {
    let cards = ``;
    movies.forEach(m => {
        cards += showCards(m);
    });
    const movieContainer = document.querySelector(`.container-movieList`);
    movieContainer.innerHTML = cards;
}


function showCards(movie) {
    return `<div class="col-md-4 mt-4">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                     <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text text-body-secondary">${movie.Year}</p>
                        <a href="#" class="btn btn-primary movie-details" data-bs-toggle="modal" data-bs-target="#movieDetailsModal" data-imdbid="${movie.imdbID}">Details</a>
                     </div>
                </div>
            </div>`;
}

function movieDetails(m) {
    return `<div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item"> <strong>Director :</strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actor :</strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Write :</strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
