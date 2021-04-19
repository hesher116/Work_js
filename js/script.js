(function () {
    'use strict';
    // this function is strict...
 }());

 let nunberOfFilms;
 
function start() {
    nunberOfFilms =  +prompt("Cколько фильмов вы уже посмотрели?", "введите значение");
    while(nunberOfFilms == '' || nunberOfFilms == null || isNaN(nunberOfFilms) ) {
        nunberOfFilms =  +prompt("Cколько фильмов вы уже посмотрели?", "введите значение");
    }
}

start();

const personalMovieDB = {
    count: nunberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a =  prompt("Один из последних просмотренных фильмов?", ""),
              b =  +prompt("На сколько оцените его?", "");
    }
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

//  rememberMyFilms();
 
 function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('Вы класный зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log ('Вы киноман!');
    } else {
        console.log ('Произошла ошибка');
    }
    
}


//  detectPersonalLevel();

 function showMyDb(hidden) {
     if (!hidden) {
        console.log(personalMovieDB);

     }
 }

 showMyDb(personalMovieDB.privat);

 function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i - 1] = genre;
     }
 }

 writeYourGenres();