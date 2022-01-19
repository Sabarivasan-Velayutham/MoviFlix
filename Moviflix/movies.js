
var search_input = document.getElementById('input-box');
var card = document.getElementsByClassName('movie-cards')[0];

document.getElementById("button").addEventListener("click" , start);
document.getElementById("input-box").addEventListener("keyup", function(event){
	if (event.code === 'Enter') {
		document.getElementById("button").click();
	}
});

function start() 
{
	console.log(search_input.value);
	const query = search_input.value;

	if (query) 
	{
		url = "https://www.omdbapi.com/?t=" + query + "&apikey=b7468b51";
		getMovies(url);
	}
}

function getMovies(url) 
{
	console.log(url);
	httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url);
    httpRequest.send();

    httpRequest.onreadystatechange = function()
    {
        if (this.readyState==4 && this.status == 200)
        {
            movie = JSON.parse(this.responseText);
			if ( movie["Error"]!="Movie not found!")
			{
				movie_display(movie);
			}
			else
			{
				document.getElementById('display').innerHTML=`
		
				<div class="card">
					<span class="movie-title" id="no-movie";"><b>No such movie...</b></span>
				</div>
			`;
			}	
        }
	}
}



function movie_display(imovie) 
{
	document.getElementById('display').innerHTML=`
	
	<div class="card">
	<img src="${imovie.Poster}" alt="Poster" width="300px" height="300px">
	<br>
	<div class ="movie-description">
		<span class="movie-title"><b>Title</b><span class="value">${imovie.Title}</span></span>
		<span class="movie-title"><b>Rating</b><span class="value">${imovie.imdbRating}</span></span>
		<span class="movie-title"><b>Director</b><span class="value">${imovie.Director}</span></span>
		<span class="movie-title"><b>Realeased </b><span class="value">${imovie.Year}</span></span>
		<span class="movie-title"><b>Genre</b><span class="value">${imovie.Genre}</span></span>
	</div>
</div>
`;
}

function home() 
{
	location.href = "https://moviflix-sabari.netlify.app/";	
}

function about() 
{
	document.getElementById('display').innerHTML=`		
		<div class="card">
			<p style="font-size: large;">This website is build to search information about movies relesed worldwide . 
			The only think you have to do is to type the movie name without any mistake.
			Movies with incorrect spelling will not provide any information . 
			Thank you for visiting my website :)</p>
		</div>
	`;
}

function developer() 
{
	document.getElementById('display').innerHTML=`		
		<div class="card">
			<p style="font-size: large;">Hello friends , this is Sabarivasan who is currently 
			studing CSE ( 2nd Year ) in SSN College of Engineering , Chennai . 
			Thank you for visiting my website </p>
		</div>
	`;
}
