 const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

  const personalMovieDB = {
      'count': numberOfFilms,
      'movies': {},
      'actors': {},
      'genres': [],
      'privat': false
     };


let ques1 = prompt("Один из последних просмотренных фильмов?", ''),
    ques = prompt("На сколько оцените его?", '');
    ans1 = prompt("Один из последних просмотренных фильмов?", ''),
    ans = prompt("На сколько оцените его?", '');

    personalMovieDB.movies[ques1] = ques;
    personalMovieDB.movies[ans1] = ans;

console.log(personalMovieDB);