<!DOCTYPE html>
<html lang="en">
    <head>
    <title>My Website</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>My First Website</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>

<section class="hero">
    <h2>Welcome to My Website</h2>
    <p>This is a simple website created using HTML and CSS.</p>
    <button>Learn More</button>
</section>

<section class="cards">

    <div class="card">
        <h3>Web Design</h3>
        <p>We create modern and responsive websites.</p>
    </div>

    <div class="card">
        <h3>Development</h3>
        <p>High quality frontend and backend development.</p>
    </div>

    <div class="card">
        <h3>Support</h3>
        <p>24/7 support for all our customers.</p>
    </div>

</section>

<footer>
    <p>© 2026 My Website | All Rights Reserved</p>
</footer>
// Select button
const button = document.getElementById("learnBtn");

// Add click event
button.addEventListener("click", function() {
    alert("Thanks for visiting my website!");
});
</body>
</html>