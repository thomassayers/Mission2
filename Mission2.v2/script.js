// Get the countdown element
const countdownElement = document.getElementById("countdown");

// Get the mode toggle element
const modeToggle = document.getElementById("mode-toggle");

// Get the mode label element
const modeLabel = document.getElementById("mode-label");

// Set the election date (14 October 2023)
const electionDate = new Date("2023-10-14T00:00:00Z");

// Function to update the countdown
function updateCountdown() {
  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference between the current date and the election date
  const timeDifference = electionDate - currentDate;

  if (timeDifference > 0) {
    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the remaining time on the countdown element
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    // If the election date has passed, display a message
    countdownElement.innerHTML = "Election Day!";
  }
}

// Initial countdown update
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Get the quote content element
const quoteContent = document.getElementById("quote-content");

// Array of quotes and images
const quotes = [
  {
    quote: "Quote 1",
    image: "image1.jpg",
  },
  {
    quote: "Quote 2",
    image: "image2.jpg",
  },
  // Add more quotes as needed
];

// Function to display the current quote
function displayQuote() {
  const currentQuote = quotes[currentQuoteIndex];
  quoteContent.innerHTML = `
    <div class="quote-text">${currentQuote.quote}</div>
    <img src="${currentQuote.image}" alt="Quote Image" />
  `;
}

// Variable to track the current quote index
let currentQuoteIndex = 0;

// Display the initial quote
displayQuote();

// Function to navigate to the previous quote
function goToPreviousQuote() {
  if (currentQuoteIndex === 0) {
    // If it's the first quote, wrap around to the last quote
    currentQuoteIndex = quotes.length - 1;
  } else {
    currentQuoteIndex--;
  }

  // Display the updated quote
  displayQuote();
}

// Function to navigate to the next quote
function goToNextQuote() {
  if (currentQuoteIndex === quotes.length - 1) {
    // If it's the last quote, wrap around to the first quote
    currentQuoteIndex = 0;
  } else {
    currentQuoteIndex++;
  }

  // Display the updated quote
  displayQuote();
}

// Add event listeners to the arrow elements for quote navigation
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", goToPreviousQuote);
rightArrow.addEventListener("click", goToNextQuote);

// Function to handle mode switch
function handleModeSwitch() {
  document.body.classList.toggle("dark");
  modeLabel.textContent = document.body.classList.contains("dark")
    ? "light"
    : "dark";
}

// Add event listener to the mode toggle element
modeToggle.addEventListener("change", handleModeSwitch);
