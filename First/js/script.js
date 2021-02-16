"use strict";
const numberOfFilms = +prompt('Сколько фильмов ты просмотрел?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i =0 ; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
          b = prompt("На сколько оценишь его?", "");

	if (a != null && b != null && a != '' && b != '' && a.length < 50){
		personalMovieDB.movies[a] = b;
		console.log('Done');
	} else{
		console.log('error');
		i--;
	}  
}
if (personalMovieDB.count <= 10 && personalMovieDB.count > 0){
	console.log('Просмотренно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
	console.log('Вы классический зритель');
}else if ( personalMovieDB.count >= 30){
	console.log("Вы киноман");
}
else{
	console.log('Error')
}

console.log(personalMovieDB);