const fs = require('fs');

const files = {
// --- QUESTION 1 ---
"index1.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechNova | Welcome</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand fw-bold" href="#">TechNova</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section class="hero-section d-flex align-items-center text-center text-white">
            <div class="container">
                <h1 class="display-3 fw-bold mb-3">Innovating the Future</h1>
                <p class="lead mb-4">We build seamless digital experiences for modern startups.</p>
                <a href="#" class="btn btn-primary btn-lg px-5 rounded-pill">Get Started</a>
            </div>
        </section>
        <section class="container py-5">
            <div class="row text-center">
                <div class="col-md-4 mb-4"><h3>Fast</h3><p>Optimized for speed and performance.</p></div>
                <div class="col-md-4 mb-4"><h3>Reliable</h3><p>99.9% uptime guaranteed.</p></div>
                <div class="col-md-4 mb-4"><h3>Secure</h3><p>Enterprise-grade security built-in.</p></div>
            </div>
        </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
"style1.css": `
.hero-section {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80') no-repeat center center;
    background-size: cover;
    height: 80vh;
}`,

// --- QUESTION 2 ---
"index2.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
<body class="bg-light text-dark">
    <main class="container py-5 text-center">
        <header class="mb-5">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Profile" class="profile-img img-fluid rounded-circle shadow-sm mb-3">
            <h1 class="fw-bold">Alex Carter</h1>
            <p class="lead text-muted">Front-End Developer & UI Designer</p>
            <div class="mt-4">
                <button class="btn btn-primary me-2">Hire Me</button>
                <button class="btn btn-outline-secondary">Download CV</button>
            </div>
        </header>
        <section class="row justify-content-center">
            <div class="col-md-6 bg-white p-5 rounded shadow-sm">
                <h3 class="mb-4">Get in Touch</h3>
                <form>
                    <div class="mb-3"><input type="text" class="form-control" placeholder="Your Name"></div>
                    <div class="mb-3"><input type="email" class="form-control" placeholder="Your Email"></div>
                    <div class="mb-3"><textarea class="form-control" rows="4" placeholder="Your Message"></textarea></div>
                    <button type="submit" class="btn btn-dark w-100">Send Message</button>
                </form>
            </div>
        </section>
    </main>
</body>
</html>`,
"style2.css": `
.profile-img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 4px solid #fff;
}`,

// --- QUESTION 3 ---
"index3.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Catalog</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style3.css" rel="stylesheet">
</head>
<body>
    <main class="container py-5">
        <h2 class="text-center mb-5 fw-bold">Our Collection</h2>
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100 product-card shadow-sm border-0">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Sneakers">
                    <div class="card-body text-center">
                        <h5 class="card-title">Urban Sneakers</h5>
                        <p class="card-text text-primary fw-bold">$89.99</p>
                        <button class="btn btn-outline-dark w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100 product-card shadow-sm border-0">
                    <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Watch">
                    <div class="card-body text-center">
                        <h5 class="card-title">Classic Watch</h5>
                        <p class="card-text text-primary fw-bold">$120.00</p>
                        <button class="btn btn-outline-dark w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100 product-card shadow-sm border-0">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Backpack">
                    <div class="card-body text-center">
                        <h5 class="card-title">Travel Backpack</h5>
                        <p class="card-text text-primary fw-bold">$65.50</p>
                        <button class="btn btn-outline-dark w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100 product-card shadow-sm border-0">
                    <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Sunglasses">
                    <div class="card-body text-center">
                        <h5 class="card-title">Aviator Glasses</h5>
                        <p class="card-text text-primary fw-bold">$45.00</p>
                        <button class="btn btn-outline-dark w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>`,
"style3.css": `
.product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}`,

// --- QUESTION 4 ---
"index4.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Menu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style4.css" rel="stylesheet">
</head>
<body>
    <main class="container py-5">
        <header class="text-center menu-header">
            <h1 class="fw-bold">Today's Menu</h1>
            <p class="lead text-muted">Fresh ingredients, prepared daily by our master chefs.</p>
        </header>
        <div class="row">
            <div class="col-lg-8 mb-4">
                <h3 class="border-bottom pb-2 mb-3">Mains & Starters</h3>
                <table class="table table-hover align-middle">
                    <thead class="table-dark">
                        <tr><th>Item</th><th>Category</th><th class="text-end">Price</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Truffle Fries</td><td>Starter</td><td class="text-end">$8.00</td></tr>
                        <tr><td>Grilled Salmon</td><td>Main</td><td class="text-end">$24.00</td></tr>
                        <tr><td>Wagyu Burger</td><td>Main</td><td class="text-end">$18.00</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <h3 class="border-bottom pb-2 mb-3">Chef's Specials</h3>
                <ul class="list-group mb-4 shadow-sm">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Lobster Bisque <span class="badge bg-danger rounded-pill">Hot</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Vegan Risotto <span class="badge bg-success rounded-pill">New</span>
                    </li>
                </ul>
                <figure class="text-center">
                    <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80" class="img-fluid rounded shadow-sm" alt="Chef's Special">
                    <figcaption class="mt-2 text-muted fst-italic">Signature Grilled Salmon</figcaption>
                </figure>
            </div>
        </div>
    </main>
</body>
</html>`,
"style4.css": `
.menu-header {
    margin-bottom: 3rem;
}`,

// --- QUESTION 5 ---
"index5.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Themed Blog</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style5.css" rel="stylesheet">
</head>
<body>
    <header class="theme-header py-4 text-center mb-5 shadow-sm">
        <h1 class="fw-bold">Creative Chronicles</h1>
        <p class="mb-0">Thoughts, stories, and ideas.</p>
    </header>
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-4 border-0 shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title text-primary fw-bold">Design Trends in 2026</h2>
                        <h6 class="card-subtitle mb-2 text-muted">By Jane Doe | Sept 24, 2026</h6>
                        <p class="card-text">Exploring the latest concepts in UI/UX design and how minimalism is evolving.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card mb-4 border-0 shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title text-primary fw-bold">The Power of CSS Variables</h2>
                        <h6 class="card-subtitle mb-2 text-muted">By John Smith | Sept 22, 2026</h6>
                        <p class="card-text">Learn how overriding root variables can instantly theme an entire application.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="text-center py-4 mt-5 border-top">
        <p class="text-muted mb-0">&copy; 2026 Creative Chronicles. Built with Custom Bootstrap.</p>
    </footer>
</body>
</html>`,
"style5.css": `
:root {
    --bs-primary: #8e44ad;
    --bs-primary-rgb: 142, 68, 173;
    --bs-font-sans-serif: 'Poppins', sans-serif;
    --bs-body-bg: #fdfbfd;
}
body {
    font-family: var(--bs-font-sans-serif);
    background-color: var(--bs-body-bg);
}
.theme-header {
    background-color: var(--bs-primary);
    color: white;
}`,

// --- QUESTION 6 ---
"index6.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notifications Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style6.css" rel="stylesheet">
</head>
<body class="bg-light">
    <main class="container py-5">
        <div class="card shadow-sm border-0 mx-auto" style="max-width: 800px;">
            <div class="card-header bg-white text-dark fw-bold fs-4 py-3">System Notifications</div>
            <div class="card-body">
                <div class="bg-light border rounded p-4 mb-4 text-center">
                    <h5 class="mb-1">Dashboard Status: <span class="text-success">Healthy</span></h5>
                    <p class="text-muted mb-0">You have 3 new notifications today.</p>
                </div>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Scheduled Maintenance:</strong> Servers will be down from 2 AM to 4 AM EST.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="alert alert-success" role="alert"><strong>Success!</strong> Your weekly report has been generated.</div>
                <div class="alert alert-info" role="alert"><strong>Tip:</strong> You can enable dark mode in settings.</div>
                <div class="alert alert-danger" role="alert"><strong>Warning!</strong> Failed login attempts detected.</div>
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
"style6.css": `/* Layout is fully handled by Bootstrap utilities */`,

// --- QUESTION 7 ---
"index7.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Tracker</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style7.css" rel="stylesheet">
</head>
<body>
    <main class="container py-5" style="max-width: 600px;">
        <header class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">My Tasks</h2>
            <span class="badge bg-primary fs-6 rounded-pill">4 Pending</span>
        </header>
        <ul class="list-group shadow-sm mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Fix navigation bug <span class="badge bg-danger">High Priority</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Write release notes <span class="badge bg-warning text-dark">Medium</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Update user avatar <span class="badge bg-info text-dark">Low</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center text-decoration-line-through text-muted bg-light">
                Database backup <span class="badge bg-secondary">Done</span>
            </li>
        </ul>
        <button class="btn btn-success w-100 py-2">
            View Completed Archive <span class="badge bg-light text-success ms-2">12</span>
        </button>
    </main>
</body>
</html>`,
"style7.css": `/* Layout is fully handled by Bootstrap utilities */`,

// --- QUESTION 8 ---
"index8.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing Plans</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style8.css" rel="stylesheet">
</head>
<body>
    <main class="container py-5">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Choose Your Plan</h2>
            <p class="text-muted">Simple pricing for teams of all sizes.</p>
        </div>
        <div class="row align-items-center text-center g-4">
            <div class="col-md-4">
                <div class="card pricing-card shadow-sm border-0">
                    <div class="card-header bg-white py-3"><h4 class="fw-normal mb-0">Basic</h4></div>
                    <div class="card-body">
                        <h1 class="card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4"><li>1 User</li><li>5GB Storage</li><li>Email Support</li></ul>
                        <button type="button" class="w-100 btn btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card pricing-card shadow border-primary border-2">
                    <div class="card-header bg-primary text-white py-3">
                        <h4 class="fw-normal mb-0">Pro <span class="badge bg-light text-primary rounded-pill ms-2 fs-6">Popular</span></h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title">$15<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4"><li>5 Users</li><li>50GB Storage</li><li>Priority Support</li></ul>
                        <button type="button" class="w-100 btn btn-primary">Get started</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card pricing-card shadow-sm border-0">
                    <div class="card-header bg-white py-3"><h4 class="fw-normal mb-0">Enterprise</h4></div>
                    <div class="card-body">
                        <h1 class="card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4"><li>Unlimited Users</li><li>500GB Storage</li><li>24/7 Phone Support</li></ul>
                        <button type="button" class="w-100 btn btn-outline-primary">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>`,
"style8.css": `
.pricing-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important; 
}`,

// --- QUESTION 9 ---
"index9.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Pagination</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style9.css" rel="stylesheet">
</head>
<body>
    <main class="container py-5">
        <h2 class="text-center mb-5">Latest Articles</h2>
        <div class="bg-light border p-5 text-center mb-5 rounded text-muted">Article Content Goes Here (Page 1)</div>
        <nav aria-label="Blog post navigation">
            <ul class="pagination justify-content-center mb-4">
                <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        <div class="d-flex justify-content-between border-top pt-4">
            <button class="btn btn-outline-secondary">&larr; Older Posts</button>
            <button class="btn btn-outline-secondary disabled" aria-disabled="true">Newer Posts &rarr;</button>
        </div>
    </main>
</body>
</html>`,
"style9.css": `/* Layout is fully handled by Bootstrap utilities */`,

// --- QUESTION 10 ---
"index10.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Agency</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style10.css" rel="stylesheet">
</head>
<body>
    <div id="travelCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80" alt="Paris">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h2>Discover Paris</h2><p>Experience the city of lights.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80" alt="Bali">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h2>Relax in Bali</h2><p>Find your peace on pristine beaches.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80" alt="Tokyo">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h2>Explore Tokyo</h2><p>Where tradition meets technology.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#travelCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#travelCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span>
        </button>
    </div>
    <main class="container py-5 text-center">
        <h3 class="mb-4">Summer Booking Goal</h3>
        <div class="progress" style="height: 30px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                70% Fully Booked
            </div>
        </div>
        <p class="mt-3 text-muted">Hurry! Only a few spots left for the season.</p>
    </main>
    <footer class="bg-dark text-white text-center py-4">
        <div class="container"><p class="mb-0">&copy; 2026 Wanderlust Travels | Contact us: 1-800-TRAVELS</p></div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
"style10.css": `
.carousel-item {
    height: 60vh;
}
.carousel-item img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}`
};

// Write files to the disk
for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(filename, content.trim(), 'utf8');
    console.log(`Created: ${filename}`);
}

console.log('All 20 files successfully generated!');