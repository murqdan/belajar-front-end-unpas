const sButton = document.getElementById('search-button');
sButton.addEventListener('click', async function () {
    try {
        const sInput = document.getElementById('search-input');
        const movies = await getMovies(sInput.value);
        updateUI(movies);
    } catch (err) {
        document.getElementById('movie-list').innerHTML = `<div class="col">
        <h1 class="text-center">${err}</h1>
      </div>`
    }

});

//event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
})

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=49c804ff&s=' + keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search;
        });
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=49c804ff&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = cards;
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showCards(m) {
    return `
    <div class="col-md-4 my-3">
      <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <p class="card-text">${m.Year}</p>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>`
}

function showMovieDetail(m) {
    return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <img src="${m.Poster}" class="img-fluid" alt="${m.Title}">
        </div>
        <div class="col-8">
          <ul class="list-group">
            <li class="list-group-item">
              <h4>${m.Title} (${m.Year})</h4>
            </li>
            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
          </ul>
        </div>
      </div>
    </div>`
}