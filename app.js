$(function(){

$.get('http://www.omdbapi.com/?t=goodfellas&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);
    var name = data.Title;
    var year = data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieOne').append('<img src="' + poster + '">',
    '<p class="one">'+ name +'</p>',
    '<p>Released in: ' + year + '</p>',
    '<p>' + runTime + '</p>' );
    });
$.get('http://www.omdbapi.com/?t=anchorman%3A+the+legend+of+ron+burgundy&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);

    var name = data.Title;
    var year =data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieTwo').append('<img src="' + poster + '">',
    '<p class="two">'+ name +'</p>','<p>Released in: ' + year + '</p>',
    '<p>' + runTime + '</p>');
  })
  $.get('http://www.omdbapi.com/?t=12+angry+men&y=&plot=short&r=json')
  .then(function(data){
    console.log(data);

    var name = data.Title;
    var year =data.Year;
    var runTime = data.Runtime;
    var poster = data.Poster;
    $('.movieThree').append('<img src="' + poster + '">','<p class="three">'+ name +'</p>',
    '<p>Released in : ' + year + '</p>','<p>' + runTime + '</p>');
  })
});
