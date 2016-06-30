$(function(){

$.get('http://www.omdbapi.com/?t=goodfellas&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);
    var name = data.Title;
    var year = data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieOne').append('<img src="' + poster + '">')
    $('.movieOne').append('<p class="one">'+ name +'</p>');
    $('.one').append('<p>Released in: ' + year + ' ' + runTime + '</p>')
  });
$.get('http://www.omdbapi.com/?t=anchorman&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);

    var name = data.Title;
    var year =data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieTwo').append('<img src="">')
    $('.movieTwo').append('<p class="two">'+ name +'</p>');
    $('.two').append('<p>Released in: ' + year + ' ' + runTime + '</p>')
  })
  $.get('http://www.omdbapi.com/?t=12+angry+men&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);

    var name = data.Title;
    var year =data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieThree').append('<img src="' + poster + '">')
    $('.movieThree').append('<p class="three">'+ name +'</p>');
    $('.three').append('<p>Released in : ' + year + ' ' + runTime + '</p>')
  })
});
