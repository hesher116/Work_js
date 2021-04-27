'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count =  +prompt("Cколько фильмов вы уже посмотрели?", "введите значение");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count =  +prompt("Cколько фильмов вы уже посмотрели?", "введите значение");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log ('Просмотрено слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('Вы класный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log ('Вы киноман!');
        } else {
            console.log ('Произошла ошибка');
        }
    
    },
    showMyDb: function (hidden) {
        if (!hidden) {
           console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('некорректные данные');
            //     i--;
            // } else {
            //         personalMovieDB.genres[i - 1] = genre;
            //     }
let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

                 if (genres === '' || genres == null) {
                console.log('некорректные данные');
                i--;
            } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }

            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
        
    };
