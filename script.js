fetch("http://localhost:3000/films")
  .then((resp) => resp.json())
  .then((data) => {
    // let allMovies = data
    //console.log(data);
    const firstFilm = data.find((object) => object.id == 1);
    //console.log(firstFilm);
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");
    imageElement.src = firstFilm.poster;
    imageElement.alt = "Poster image";
    imageElement.width = "400";
    imageElement.height = "400";
    posterDiv.appendChild(imageElement);
    //display title of first film
    const moreDetails = document.getElementById("moreDetails");
    let paraTitle = document.createElement("p");
    let paraRuntime = document.createElement("p");
    paraTitle.innerText = firstFilm.title;
    paraRuntime.innerText = `${firstFilm.runtime} minutes`;
    let paraDescription = document.createElement("p");
    let showtimebtn = document.createElement("p");
    let remTickets = firstFilm.capacity - firstFilm.tickets_sold;
    let spanElement = document.createElement("span");
    let ticketBtn = document.createElement("button");
    let breakElement = document.createElement("br");
    showtimebtn.innerText = `Movie Time: ${firstFilm.showtime}`;
    paraDescription.innerText = firstFilm.description;
    spanElement.innerText = `${remTickets} tickets left`;
    ticketBtn.innerText = "BUY TICKET";
    moreDetails.appendChild(paraTitle);
    moreDetails.appendChild(paraRuntime);
    moreDetails.appendChild(paraDescription);
    moreDetails.appendChild(showtimebtn);
    moreDetails.appendChild(breakElement);
    moreDetails.appendChild(spanElement);
    moreDetails.appendChild(breakElement);
    moreDetails.appendChild(ticketBtn);
    ticketBtn.addEventListener("click", () => {
      // alert("I am Clicked")
      if (remTickets === 1) {
        //alert("No more tickets")
        ticketBtn.innerText = "SOLD OUT";
        spanElement.innerText = "";
      } else {
        --remTickets;
        //console.log(remTickets)
        spanElement.innerText = `${remTickets} tickets left`;
      }
    });
  });
function getFilms() {
  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(renderFilms);
}
getFilms();
function renderFilms(films) {
  films.forEach(filmDetails);
}
function filmDetails(details) {
  const titlesElement = document.getElementById("titles");
  let listElement = document.createElement("li");
  listElement.innerText = details.title;
  titlesElement.appendChild(listElement);
  listElement.addEventListener("click", () => {
    let firstFilm = details;
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");
    imageElement.src = firstFilm.poster;
    imageElement.alt = "Poster image";
    imageElement.width = "400";
    imageElement.height = "400";
    posterDiv.innerHTML = "";
    posterDiv.appendChild(imageElement);
    //display title of first film
    const moreDetails = document.getElementById("moreDetails");
    moreDetails.innerHTML = "";
    let paraTitle = document.createElement("p");
    let paraRuntime = document.createElement("p");
    paraTitle.innerText = firstFilm.title;
    paraRuntime.innerText = `${firstFilm.runtime} minutes`;
    let paraDescription = document.createElement("p");
    let showtimebtn = document.createElement("p");
    let remTickets = firstFilm.capacity - firstFilm.tickets_sold;
    let spanElement = document.createElement("span");
    let ticketBtn = document.createElement("button");
    let breakElement = document.createElement("br");
    showtimebtn.innerText = `Movie Time: ${firstFilm.showtime}`;
    paraDescription.innerText = firstFilm.description;
    spanElement.innerText = `${remTickets} tickets left`;
    ticketBtn.innerText = "BUY TICKET";
    moreDetails.appendChild(paraTitle);
    moreDetails.appendChild(paraRuntime);
    moreDetails.appendChild(paraDescription);
    moreDetails.appendChild(showtimebtn);
    moreDetails.appendChild(breakElement);
    moreDetails.appendChild(spanElement);
    moreDetails.appendChild(breakElement);
    moreDetails.appendChild(ticketBtn);
    ticketBtn.addEventListener("click", () => {
      // alert("I am Clicked")
      if (remTickets === 1) {
        //alert("No more tickets")
        ticketBtn.innerText = "SOLD OUT";
        spanElement.innerText = "";
      } else {
        --remTickets;
        //console.log(remTickets)
        spanElement.innerText = `${remTickets} tickets left`;
      }
    });
  });
}
