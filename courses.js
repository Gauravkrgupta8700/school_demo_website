const courses = [
    { name: "Course 1", time: "9:00 AM - 10:30 AM", day: "monday" },
    { name: "Course 2", time: "11:00 AM - 12:30 PM", day: "tuesday" },
    { name: "Course 3", time: "1:30 PM - 3:00 PM", day: "wednesday" },
    // Add more courses with different days
];

const courseList = document.getElementById("course-list");
const modal = document.getElementById("modal");
const bookButton = document.getElementById("book-button");
const closeModal = document.getElementById("close-modal");
const filterSelect = document.getElementById("filter-select");

// Function to change the background image dynamically
function changeBackground() {
    const images = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
    const currentImage = document.body.style.backgroundImage;
    let randomImage;

    do {
        randomImage = `url('${images[Math.floor(Math.random() * images.length)]}')`;
    } while (currentImage === randomImage);

    document.body.style.backgroundImage = randomImage;
}

setInterval(changeBackground, 10000); // Change background every 10 seconds

// Function to filter courses based on the selected day
function filterCourses() {
    const selectedDay = filterSelect.value;
    const filteredCourses = selectedDay === "all" ? courses : courses.filter(course => course.day === selectedDay);

    courseList.innerHTML = "";

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const courseName = document.createElement("h2");
        courseName.textContent = course.name;

        const courseTime = document.createElement("p");
        courseTime.textContent = course.time;

        const enrollButton = document.createElement("button");
        enrollButton.textContent = "Book Slot";
        enrollButton.addEventListener("click", () => {
            openModal(course.name, course.time);
        });

        courseDiv.appendChild(courseName);
        courseDiv.appendChild(courseTime);
        courseDiv.appendChild(enrollButton);

        courseList.appendChild(courseDiv);
    });
}

filterSelect.addEventListener("change", filterCourses);

function openModal(courseName, courseTime) {
    modal.style.display = "block";
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <h2>Book a Slot</h2>
        <p>${courseName}</p>
        <p>${courseTime}</p>
        <input type="date" id="schedule-date">
        <button id="book-button">Book</button>
        <span id="close-modal" class="close">Close</span>
    `;

    const modalBookButton = document.getElementById("book-button");
    modalBookButton.addEventListener("click", () => {
        const scheduleDate = document.getElementById("schedule-date").value;
        if (scheduleDate) {
            alert(`You have booked ${courseName} on ${scheduleDate}`);
            closeModalModal();
        } else {
            alert("Please select a date to book.");
        }
    });

    closeModal.addEventListener("click", closeModalModal);
}

function closeModalModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModalModal();
    }
};