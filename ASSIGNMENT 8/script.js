const movies = [
  { id: 1, title: "Avengers", img: "avenger.jpg" },
  { id: 2, title: "Batman", img: "batman.jpg" },
  { id: 3, title: "Superman", img: "superman.jpg" },
  { id: 4, title: "Spider-Man", img: "spider.jpg" },
];

const app = document.getElementById("app");
const movieList = document.getElementById("movie-list");
const movieDetails = document.getElementById("movie-details");
const bookingForm = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");

let selectedMovie = null;
let bookingInfo = {};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function renderMovies() {
  movieList.innerHTML = "<h2>Select a Movie</h2><div class='grid'></div>";
  const grid = movieList.querySelector(".grid");
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <button onclick="showDetails(${movie.id})">Details</button>
    `;
    grid.appendChild(card);
  });
  showPage("movie-list");
}

function showDetails(id) {
  selectedMovie = movies.find(m => m.id === id);
  movieDetails.innerHTML = `
    <h2>${selectedMovie.title}</h2>
    <img src="${selectedMovie.img}" />
    <br />
    <button onclick="showBookingForm()">Book Seat</button>
  `;
  showPage("movie-details");
}

function showBookingForm() {
  bookingForm.innerHTML = `
    <h2>Book Seat for ${selectedMovie.title}</h2>
    <form onsubmit="submitForm(event)">
      <input type="text" placeholder="Name" id="name" required /><br /><br />
      <input type="email" placeholder="Email" id="email" required /><br /><br />
      <input type="tel" placeholder="Mobile" id="mobile" required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  `;
  showPage("booking-form");
}

function submitForm(e) {
  e.preventDefault();
  bookingInfo = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    bookingId: Math.floor(Math.random() * 1000000),
  };
  showConfirmation();
}

function showConfirmation() {
  confirmation.innerHTML = `
    <h2>Seat Booked!</h2>
    <p><strong>Booking ID:</strong> ${bookingInfo.bookingId}</p>
    <p><strong>Name:</strong> ${bookingInfo.name}</p>
    <p><strong>Email:</strong> ${bookingInfo.email}</p>
    <p><strong>Mobile:</strong> ${bookingInfo.mobile}</p>
    <button onclick="renderMovies()">Back to Movies</button>
  `;
  showPage("confirmation");
}

// Load the app
renderMovies();