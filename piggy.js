
let currentPage = 1;
const totalPages = 4;

function openLetter() {
    // Hide the envelope and open button
    document.getElementById("envelope").style.display = "none";
    document.querySelector(".open-btn").style.display = "none";

    // Show the heading
    document.getElementById("revealHeading").style.display = "block";

    // Show the letter container with fade-in animation
    const letter = document.getElementById("letter");
    letter.style.display = "block";

    // Small timeout so CSS transition works
    setTimeout(() => {
        letter.classList.add("show");
    }, 50);

    // Show first page
    showPage(currentPage);
}

function goNext() {
    if (currentPage < totalPages) {
        hidePage(currentPage);
        currentPage++;
        showPage(currentPage);
    }
}

function goBack() {
    if (currentPage > 1) {
        hidePage(currentPage);
        currentPage--;
        showPage(currentPage);
    }
}

function showPage(pageNum) {
    const page = document.getElementById(`page${pageNum}`);
    if (page) {
        page.style.display = "block";
    }
}

function hidePage(pageNum) {
    const page = document.getElementById(`page${pageNum}`);
    if (page) {
        page.style.display = "none";
    }
}

function showMemorySection() {
    document.getElementById("sectionHomePage").style.display = "none";
    document.querySelector(".sectionMemoryPage").style.display = "flex";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showFantasyPage() {
    document.querySelector(".sectionMemoryPage").style.display = "none";
    document.getElementById("SectionFantasyPage").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function revealFantasy(card) {
    card.classList.toggle("revealed");
}

document.getElementById("goToJourneyBtn").addEventListener("click", function() {
    document.getElementById("SectionFantasyPage").style.display = "none";
    document.getElementById("SectionJourneyPage").style.display = "block";
});

const audio = document.getElementById("bg-music");

// Wait for first user interaction
window.addEventListener("click", () => {
    audio.play();
}, {
    once: true
}); // play only once on first click
