"use sctrict";

const numberOfFilms = +prompt("Сколько Фильмов Вы уже посмотрели?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};




for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
          b = prompt("На сколько его оцениваете?", "");    

if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    i--;
    console.log('error')
}

    
}

// console.log(personalMovieDB);