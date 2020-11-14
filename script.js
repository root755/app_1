"use sctrict";

const numberOfFilms = +prompt("Сколько Фильмов Вы уже посмотрели?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько его оцениваете?", ""),
      c = prompt("Какой еще смотрели?", ""),
      d = prompt("Офените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
