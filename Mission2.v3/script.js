// Countdown Timer
const countdownLabel = document.getElementById('countdown-label');
const countdownTimer = document.getElementById('countdown-timer');
const electionDate = new Date('2023-10-14');

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = electionDate - currentDate;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function() {
  body.classList.toggle('dark-mode');
});

// Add Event
const addEventBtn = document.getElementById('add-event-btn');
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');
const eventCategoryInput = document.getElementById('event-category');
const eventsList = document.getElementById('events');

addEventBtn.addEventListener('click', function() {
  const eventName = eventNameInput.value;
  const eventDate = eventDateInput.value;
  const eventCategory = eventCategoryInput.value;

  const eventItem = document.createElement('li');
  eventItem.textContent = `${eventName} - ${eventDate} (${eventCategory})`;

  // Delete button with a minus icon
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '-';
  deleteButton.classList.add('delete-btn');
  eventItem.appendChild(deleteButton);

  eventsList.appendChild(eventItem);

  eventNameInput.value = '';
  eventDateInput.value = '';
});

// Delete Event
eventsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const eventItem = event.target.parentNode;
    eventsList.removeChild(eventItem);
  }
});

// Print Page
const printBtn = document.getElementById('print-btn');
printBtn.addEventListener('click', function() {
  window.print();
});
