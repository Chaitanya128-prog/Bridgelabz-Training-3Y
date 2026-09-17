const fs = require('fs');

const filesData = {
    // Q1
    "responsive-image-filter-gallery.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Image Filter Gallery</title>
    <link rel="stylesheet" href="responsive-image-filter-gallery.css">
</head>
<body>
    <header><h1>Responsive Image Filter Gallery</h1></header>
    <main>
        <section class="gallery">
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1015/400/300" alt="Landscape" class="filter-blur"></div>
                <figcaption>Blur Filter</figcaption>
            </figure>
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1018/400/300" alt="Mountains" class="filter-grayscale"></div>
                <figcaption>Grayscale Filter</figcaption>
            </figure>
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1025/400/300" alt="Pug Dog" class="filter-sepia"></div>
                <figcaption>Sepia Filter</figcaption>
            </figure>
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1039/400/300" alt="Waterfall" class="filter-brightness"></div>
                <figcaption>Brightness Filter</figcaption>
            </figure>
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1043/400/300" alt="Forest" class="filter-contrast"></div>
                <figcaption>Contrast Filter</figcaption>
            </figure>
            <figure class="gallery-card">
                <div class="image-wrapper"><img src="https://picsum.photos/id/1050/400/300" alt="Coastal View" class="filter-hue"></div>
                <figcaption>Hue-Rotate Filter</figcaption>
            </figure>
        </section>
    </main>
    <footer><p>&copy; 2026 Image Filter Gallery Demo</p></footer>
</body>
</html>`,

    "responsive-image-filter-gallery.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #2c3e50; color: #ffffff; text-align: center; padding: 1.5rem 1rem; }
main { flex: 1; padding: 2rem 1rem; max-width: 1200px; margin: 0 auto; width: 100%; }
.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
.gallery-card { background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center; }
.image-wrapper { overflow: hidden; height: 180px; }
.image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: filter 0.5s ease; }
.filter-blur { filter: blur(4px); }
.filter-grayscale { filter: grayscale(100%); }
.filter-sepia { filter: sepia(100%); }
.filter-brightness { filter: brightness(150%); }
.filter-contrast { filter: contrast(200%); }
.filter-hue { filter: hue-rotate(90deg); }
.gallery-card:hover img { filter: none; }
figcaption { padding: 0.75rem; font-weight: bold; font-size: 0.95rem; color: #2c3e50; }
footer { background-color: #2c3e50; color: #ffffff; text-align: center; padding: 1rem; margin-top: auto; }
@media (max-width: 600px) { .gallery { grid-template-columns: 1fr; } }`,

    // Q2
    "responsive-web-design-layout.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Design Layout</title>
    <link rel="stylesheet" href="responsive-web-design-layout.css">
</head>
<body>
    <header class="navbar">
        <div class="logo">MyBrand</div>
        <nav class="nav-links">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    <main class="container">
        <section class="features">
            <article class="feature-box">
                <h2>Fast Performance</h2>
                <p>Optimized for quick load times and high efficiency across all devices.</p>
            </article>
            <article class="feature-box">
                <h2>Responsive Design</h2>
                <p>Built with modern Flexbox techniques to look great on desktop, tablet, and mobile.</p>
            </article>
            <article class="feature-box">
                <h2>Clean Code</h2>
                <p>Structured with semantic HTML5 tags and nicely formatted CSS styles.</p>
            </article>
        </section>
    </main>
    <footer><p>&copy; 2026 MyBrand. All rights reserved.</p></footer>
</body>
</html>`,

    "responsive-web-design-layout.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; color: #333; display: flex; flex-direction: column; min-height: 100vh; background-color: #fafafa; }
.navbar { display: flex; justify-content: space-between; align-items: center; background-color: #1e293b; padding: 1rem 2rem; color: #ffffff; }
.logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: #ffffff; text-decoration: none; transition: color 0.3s ease; }
.nav-links a:hover { color: #38bdf8; }
.container { flex: 1; padding: 3rem 1.5rem; max-width: 1100px; margin: 0 auto; width: 100%; }
.features { display: flex; justify-content: space-between; gap: 1.5rem; }
.feature-box { flex: 1; background-color: #ffffff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; transition: transform 0.3s ease; }
.feature-box:hover { transform: scale(1.05); }
.feature-box h2 { font-size: 1.25rem; margin-bottom: 0.75rem; color: #0f172a; }
.feature-box p { color: #64748b; line-height: 1.5; }
footer { background-color: #1e293b; color: #ffffff; text-align: center; padding: 1.25rem; margin-top: auto; }
@media (max-width: 750px) { .features { flex-direction: column; } .navbar { flex-direction: column; gap: 1rem; text-align: center; } }`,

    // Q3
    "responsive-cards-with-media-queries.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Cards with Media Queries</title>
    <link rel="stylesheet" href="responsive-cards-with-media-queries.css">
</head>
<body>
    <header><h1>Responsive Card Layout</h1></header>
    <main class="container">
        <section class="card-grid">
            <article class="card"><h2>Card One</h2><p>This is the first card in our flexbox layout. Hover over to see color transition.</p></article>
            <article class="card"><h2>Card Two</h2><p>This is the second card in our flexbox layout. Hover over to see color transition.</p></article>
            <article class="card"><h2>Card Three</h2><p>This is the third card in our flexbox layout. Hover over to see color transition.</p></article>
            <article class="card"><h2>Card Four</h2><p>This is the fourth card in our flexbox layout. Hover over to see color transition.</p></article>
        </section>
    </main>
    <footer><p>&copy; 2026 Responsive Cards Demo</p></footer>
</body>
</html>`,

    "responsive-cards-with-media-queries.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f0f2f5; color: #333; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #3b5998; color: #fff; text-align: center; padding: 1.5rem; }
.container { flex: 1; max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; width: 100%; }
.card-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; }
.card { background-color: #ffffff; flex: 1 1 calc(25% - 1.5rem); padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease, color 0.3s ease; }
.card:hover { background-color: #3b5998; color: #ffffff; }
.card h2 { margin-bottom: 0.5rem; font-size: 1.3rem; }
.card p { line-height: 1.4; font-size: 0.95rem; }
footer { background-color: #3b5998; color: #fff; text-align: center; padding: 1rem; margin-top: auto; }
@media (max-width: 900px) { .card { flex: 1 1 calc(50% - 1.5rem); } }
@media (max-width: 600px) { .card { flex: 1 1 100%; } }`,

    // Q4
    "responsive-typography.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Typography</title>
    <link rel="stylesheet" href="responsive-typography.css">
</head>
<body>
    <main class="wrapper">
        <section class="content-box">
            <h1>Fluid Typography with CSS Clamp</h1>
            <p>Responsive typography ensures that text content scales fluidly across various viewport sizes using clamp().</p>
        </section>
    </main>
</body>
</html>`,

    "responsive-typography.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #eef2f5; color: #2b2b2b; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 1rem; }
.wrapper { width: 100%; max-width: 800px; }
.content-box { background-color: #ffffff; text-align: center; padding: 3rem 2rem; margin: 2rem auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); }
h1 { font-size: clamp(1.5rem, 4vw, 3rem); margin-bottom: 1.5rem; color: #1a202c; line-height: 1.2; }
p { font-size: clamp(1rem, 2vw, 1.5rem); line-height: 1.7; color: #4a5568; max-width: 650px; margin: 0 auto; }
@media (max-width: 700px) { .content-box { padding: 2rem 1.25rem; margin: 1rem auto; } p { line-height: 1.5; letter-spacing: 0.2px; } }`,

    // Q5
    "filter-cards-with-animation.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter Cards with Animation</title>
    <link rel="stylesheet" href="filter-cards-with-animation.css">
</head>
<body>
    <header><h1>Team Profile Cards</h1></header>
    <main class="container">
        <section class="card-list">
            <article class="profile-card">
                <img src="https://picsum.photos/id/1005/200/200" alt="Profile 1" class="img-grayscale">
                <h2>Alex Johnson</h2>
                <p>Lead Web Developer specializing in layout design and performance.</p>
            </article>
            <article class="profile-card">
                <img src="https://picsum.photos/id/1027/200/200" alt="Profile 2" class="img-sepia">
                <h2>Sophia Smith</h2>
                <p>UI/UX Designer focused on user experience and web accessibility.</p>
            </article>
            <article class="profile-card">
                <img src="https://picsum.photos/id/1012/200/200" alt="Profile 3" class="img-blur">
                <h2>Michael Brown</h2>
                <p>Frontend Engineer building responsive interfaces.</p>
            </article>
        </section>
    </main>
    <footer><p>&copy; 2026 Profile Cards Inc.</p></footer>
</body>
</html>`,

    "filter-cards-with-animation.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f8fafc; color: #334155; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #0f172a; color: #ffffff; text-align: center; padding: 1.5rem; }
.container { flex: 1; max-width: 1000px; margin: 0 auto; padding: 3rem 1rem; width: 100%; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.card-list { display: flex; justify-content: space-between; gap: 2rem; animation: fadeIn 1s ease-out forwards; }
.profile-card { flex: 1; background-color: #ffffff; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.profile-card img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; transition: filter 0.3s ease; }
.img-grayscale { filter: grayscale(100%); }
.img-sepia { filter: sepia(100%); }
.img-blur { filter: blur(2px); }
.profile-card:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12); }
.profile-card:hover img { filter: none; }
.profile-card h2 { font-size: 1.25rem; margin-bottom: 0.5rem; color: #0f172a; }
.profile-card p { font-size: 0.9rem; color: #64748b; line-height: 1.4; }
footer { background-color: #0f172a; color: #ffffff; text-align: center; padding: 1rem; margin-top: auto; }
@media (max-width: 800px) { .card-list { flex-direction: column; } }`,

    // Q6
    "responsive-css-cheat-sheet.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive CSS Cheat Sheet</title>
    <link rel="stylesheet" href="responsive-css-cheat-sheet.css">
</head>
<body>
    <header><h1>Responsive CSS Cheat Sheet</h1></header>
    <main class="container">
        <section class="grid-sheet">
            <article class="cheat-box">
                <h2 class="term">CSS Filters</h2>
                <div class="description">Used to apply visual effects like blur, contrast, grayscale, and sepia directly to HTML elements.</div>
            </article>
            <article class="cheat-box">
                <h2 class="term">Media Queries</h2>
                <div class="description">Conditional CSS rules created using <code>@media</code> to apply styles based on device viewport dimensions.</div>
            </article>
            <article class="cheat-box">
                <h2 class="term">Responsive Design</h2>
                <div class="description">An approach ensuring webpages render smoothly across desktop, tablet, and mobile screens seamlessly.</div>
            </article>
            <article class="cheat-box">
                <h2 class="term">Typography</h2>
                <div class="description">Utilizes relative units like rem, vw, and functions like <code>clamp()</code> for fluid text scaling.</div>
            </article>
        </section>
    </main>
    <footer><p>&copy; 2026 CSS Reference Guide</p></footer>
</body>
</html>`,

    "responsive-css-cheat-sheet.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f3f4f6; color: #1f2937; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #4f46e5; color: #ffffff; text-align: center; padding: 1.5rem; }
.container { flex: 1; max-width: 1000px; margin: 0 auto; padding: 2rem 1rem; width: 100%; }
.grid-sheet { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.cheat-box { background-color: #ffffff; border-left: 5px solid #4f46e5; padding: 1.5rem; border-radius: 6px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.cheat-box:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); }
.term { font-size: 1.25rem; color: #4f46e5; margin-bottom: 0.5rem; }
.description { font-size: 0.95rem; line-height: 1.5; color: #4b5563; }
code { background-color: #e0e7ff; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
footer { background-color: #4f46e5; color: #ffffff; text-align: center; padding: 1rem; margin-top: auto; }
@media (max-width: 700px) { .grid-sheet { grid-template-columns: 1fr; } .cheat-box { display: flex; flex-direction: column; gap: 0.25rem; border-left: none; border-top: 4px solid #4f46e5; } .term::after { content: " :"; } }`,

    // Q7
    "combined-responsive-web-demo.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Responsive Web Demo</title>
    <link rel="stylesheet" href="combined-responsive-web-demo.css">
</head>
<body>
    <header class="navbar">
        <div class="logo">ResponsiveDemo</div>
        <nav class="nav-links">
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#cheatsheet">Cheat Sheet</a>
        </nav>
    </header>
    <main class="main-grid">
        <section id="gallery" class="grid-card">
            <h2>Image Gallery</h2>
            <div class="gallery-inner">
                <img src="https://picsum.photos/id/1015/300/200" alt="Demo Image 1">
                <img src="https://picsum.photos/id/1018/300/200" alt="Demo Image 2">
            </div>
        </section>
        <section id="about" class="grid-card">
            <h2>Responsive Web Concept</h2>
            <p>Responsive web design allows developers to create flexible web pages that automatically adjust across devices.</p>
        </section>
        <section id="cheatsheet" class="grid-card">
            <h2>Cheat Sheet Preview</h2>
            <ul>
                <li><strong>Flexbox:</strong> 1D layouts.</li>
                <li><strong>Grid:</strong> 2D layouts.</li>
                <li><strong>Media Queries:</strong> Device styling.</li>
            </ul>
        </section>
    </main>
    <footer><p>Contact Us: info@responsivedemo.com | &copy; 2026</p></footer>
</body>
</html>`,

    "combined-responsive-web-demo.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f1f5f9; color: #334155; display: flex; flex-direction: column; min-height: 100vh; }
.navbar { display: flex; justify-content: space-between; align-items: center; background-color: #0d9488; padding: 1rem 2rem; color: #ffffff; }
.logo { font-size: 1.4rem; font-weight: bold; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: #ffffff; text-decoration: none; transition: opacity 0.3s ease; }
.nav-links a:hover { opacity: 0.8; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
.main-grid { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1200px; margin: 0 auto; padding: 2.5rem 1rem; width: 100%; animation: fadeIn 0.8s ease-in-out; }
.grid-card { background-color: #ffffff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.grid-card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); }
.grid-card h2 { color: #0d9488; margin-bottom: 1rem; font-size: 1.25rem; }
.gallery-inner { display: flex; flex-direction: column; gap: 0.75rem; }
.gallery-inner img { width: 100%; border-radius: 6px; filter: grayscale(80%); transition: filter 0.3s ease; }
.gallery-inner img:hover { filter: grayscale(0%); }
.grid-card p, .grid-card ul { line-height: 1.6; font-size: 0.95rem; }
.grid-card ul { padding-left: 1.2rem; }
footer { background-color: #0d9488; color: #ffffff; text-align: center; padding: 1.25rem; margin-top: auto; }
@media (max-width: 700px) { .navbar { flex-direction: column; gap: 0.75rem; } .main-grid { grid-template-columns: 1fr; } }`,

    // Q8
    "filter-comparison-layout.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter Comparison Layout</title>
    <link rel="stylesheet" href="filter-comparison-layout.css">
</head>
<body>
    <header><h1>Before & After Filter Comparison</h1></header>
    <main class="container">
        <section class="comparison-wrapper">
            <figure class="image-box">
                <img src="https://picsum.photos/id/1069/600/400" alt="Original Image" class="original">
                <figcaption>Original Image (Before)</figcaption>
            </figure>
            <figure class="image-box">
                <img src="https://picsum.photos/id/1069/600/400" alt="Filtered Image" class="filtered">
                <figcaption>Filtered Image (Contrast/Brightness Hover)</figcaption>
            </figure>
        </section>
    </main>
    <footer><p>&copy; 2026 Image Comparison Demo</p></footer>
</body>
</html>`,

    "filter-comparison-layout.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #18181b; color: #f4f4f5; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #27272a; text-align: center; padding: 1.5rem; border-bottom: 1px solid #3f3f46; }
.container { flex: 1; max-width: 1100px; margin: 0 auto; padding: 3rem 1rem; width: 100%; }
.comparison-wrapper { display: flex; justify-content: center; gap: 2rem; }
.image-box { flex: 1; background-color: #27272a; padding: 1rem; border-radius: 8px; text-align: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); }
.image-box img { width: 100%; height: auto; border-radius: 6px; display: block; }
.filtered { filter: contrast(180%) brightness(80%); transition: filter 0.5s ease; }
.image-box:hover .filtered { filter: contrast(100%) brightness(100%); }
figcaption { margin-top: 1rem; font-size: 1rem; color: #a1a1aa; font-weight: bold; }
footer { background-color: #27272a; text-align: center; padding: 1rem; margin-top: auto; border-top: 1px solid #3f3f46; }
@media (max-width: 700px) { .comparison-wrapper { flex-direction: column; } }`,

    // Q9
    "responsive-design-principles-summary.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Principles Summary</title>
    <link rel="stylesheet" href="responsive-design-principles-summary.css">
</head>
<body>
    <header><h1>Core Responsive Design Principles</h1></header>
    <main class="container">
        <section class="principles-grid">
            <article class="principle-card">
                <h2>Fluid Layouts</h2>
                <p>Layouts that resize proportionally using percentage-based widths or CSS Grid and Flexbox.</p>
                <pre><code>.container { width: 100%; max-width: 1200px; }</code></pre>
            </article>
            <article class="principle-card">
                <h2>Flexible Media</h2>
                <p>Media assets that scale within their containing elements to prevent clipping or overflow.</p>
                <pre><code>img { max-width: 100%; height: auto; }</code></pre>
            </article>
            <article class="principle-card">
                <h2>Breakpoints</h2>
                <p>Media query boundaries applied to adjust styles based on device viewport widths.</p>
                <pre><code>@media (max-width: 600px) { ... }</code></pre>
            </article>
        </section>
    </main>
    <footer><p>&copy; 2026 Web Design Education</p></footer>
</body>
</html>`,

    "responsive-design-principles-summary.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b; display: flex; flex-direction: column; min-height: 100vh; }
header { background-color: #0284c7; color: #ffffff; text-align: center; padding: 1.5rem; }
.container { flex: 1; max-width: 1100px; margin: 0 auto; padding: 3rem 1rem; width: 100%; }
.principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.principle-card { background-color: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); transition: all 0.4s ease; }
.principle-card h2 { font-size: 1.3rem; margin-bottom: 0.75rem; color: #0369a1; transition: color 0.3s ease; }
.principle-card p { font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem; }
pre { background-color: #f1f5f9; padding: 0.75rem; border-radius: 4px; font-size: 0.85rem; overflow-x: auto; }
.principle-card:hover { background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; }
.principle-card:hover h2 { color: #ffffff; }
.principle-card:hover pre { background-color: rgba(255, 255, 255, 0.2); color: #ffffff; }
footer { background-color: #0284c7; color: #ffffff; text-align: center; padding: 1rem; margin-top: auto; }
@media (max-width: 600px) { .principles-grid { grid-template-columns: 1fr; } }`,

    // Q10
    "responsive-dashboard-summary.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Dashboard Summary</title>
    <link rel="stylesheet" href="responsive-dashboard-summary.css">
</head>
<body>
    <div class="dashboard-grid">
        <header class="dash-header"><h1>Admin Dashboard</h1></header>
        <aside class="dash-sidebar">
            <nav>
                <a href="#">Overview</a>
                <a href="#">Filters</a>
                <a href="#">Typography</a>
                <a href="#">Settings</a>
            </nav>
        </aside>
        <main class="dash-main">
            <div class="card-grid">
                <article class="dash-card"><h3>CSS Filters</h3><p>Manage and configure graphic filter properties.</p></article>
                <article class="dash-card"><h3>Typography</h3><p>Fluid font scale settings using clamp().</p></article>
                <article class="dash-card"><h3>Media Queries</h3><p>Responsive breakpoint configurations.</p></article>
                <article class="dash-card"><h3>Cheat Sheet Links</h3><p>Quick references and developer guides.</p></article>
            </div>
        </main>
    </div>
</body>
</html>`,

    "responsive-dashboard-summary.css": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background-color: #f1f5f9; color: #334155; }
@keyframes dashboardLoad { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
.dashboard-grid { display: grid; grid-template-areas: "header header" "sidebar main"; grid-template-columns: 220px 1fr; grid-template-rows: 60px 1fr; min-height: 100vh; animation: dashboardLoad 0.6s ease-out; }
.dash-header { grid-area: header; background-color: #1e1b4b; color: #ffffff; display: flex; align-items: center; padding: 0 1.5rem; }
.dash-header h1 { font-size: 1.25rem; }
.dash-sidebar { grid-area: sidebar; background-color: #312e81; padding: 1.5rem 1rem; }
.dash-sidebar nav { display: flex; flex-direction: column; gap: 1rem; }
.dash-sidebar a { color: #c7d2fe; text-decoration: none; font-size: 0.95rem; padding: 0.5rem; border-radius: 4px; transition: background-color 0.3s ease; }
.dash-sidebar a:hover { background-color: #4338ca; color: #ffffff; }
.dash-main { grid-area: main; padding: 2rem; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
.dash-card { background-color: #ffffff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.dash-card:hover { transform: scale(1.04); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }
.dash-card h3 { color: #312e81; margin-bottom: 0.5rem; font-size: 1.1rem; }
.dash-card p { font-size: 0.9rem; color: #64748b; }
@media (max-width: 750px) { .dashboard-grid { grid-template-areas: "header" "sidebar" "main"; grid-template-columns: 1fr; grid-template-rows: auto auto 1fr; } .dash-sidebar nav { flex-direction: row; justify-content: space-around; } }`
};

// Write files to disk
for (const [filename, content] of Object.entries(filesData)) {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✔ Created: ${filename}`);
}

console.log("\n🚀 All 20 Files Successfully Created!");