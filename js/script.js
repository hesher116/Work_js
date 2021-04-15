// Задание на урок:
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
"use strict";

const nunberOfFilms =  +prompt("Cколько фильмов вы уже посмотрели?", "введите значение");
// alert(`А я знаю, шо ти іван, ${answer}`)
// console.log(typeof(answer), answer);

const personalMovieD = {
    count: nunberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstFilm =  prompt("Один из последних просмотренных фильмов?", "введите название"),
      firstRating =  +prompt("На сколько оцените его?", "оценка"),
      secondFilm =  prompt("Один из последних просмотренных фильмов?", "введите название"),
      secondRating =  +prompt("На сколько оцените его?", "оценка");

personalMovieD.movies[firstFilm] = firstRating;
personalMovieD.movies[secondFilm] = secondRating;

console.log(personalMovieD);

// const answers = [];

// answers[0] = prompt("name?", "");
// answers[1] = prompt("sex?", "");
// answers[2] = prompt("age?", "");

// console.log(typeof(answers));
// console.log(typeof(null));