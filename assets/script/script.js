

const cardHTML = `
<div class="card">
  <div class="card-title">Title</div>
  <div class="card-description">Description goes here...</div>
</div>`;

function renderAllBlogs(section) {
    const mainContent = window.document.getElementById(section);

    for (var i = 0; i <= 12; ++i) {
        var currentCard = cardHTML;

        mainContent.innerHTML += currentCard;
    }
}

function gotoHome() {
    renderAllBlogs('mainContent');

    window.document.getElementById('mainContent').style.display = 'block';
    window.document.getElementById('dashboard').style.display = 'none';
    window.document.getElementById('signin').style.display = 'none';       
}

function gotoDashboard() {
    renderAllBlogs('dashboard');

    window.document.getElementById('mainContent').style.display = 'none';
    window.document.getElementById('dashboard').style.display = 'block';
    window.document.getElementById('signin').style.display = 'none';       
}

function gotoSignin() {
    window.document.getElementById('mainContent').style.display = 'none';
    window.document.getElementById('dashboard').style.display = 'none';
    window.document.getElementById('signin').style.display = 'block';  
}

function gotoLogout() {
    gotoHome();
}

renderAllBlogs();