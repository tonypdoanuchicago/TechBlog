

const cardHTML = `
<div class="card">
  <div class="card-title">Title</div>
  <div class="card-description">Description goes here...</div>
</div>`;

function renderAllBlogs(section) {
    const mainContent = window.document.getElementById(section);

    mainContent.innerHTML = "";

        fetch("/api/blogs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log("getBlog() successfully: ", json);

            for (var i = 0; i < Object.keys(json).length; ++i) {
                var thisElement = json[i];

                var onclickHandler = "";

                if (section === 'dashboard') {
                    onclickHandler = " onclick=\"self.location='/api/blogs/blog/edit/"+ thisElement.blog_id + "'\" ";     
                } else {
                    onclickHandler = " onclick=\"self.location='/api/comments/edit/"+ thisElement.blog_id + "'\" ";     
                }

                var currentCard = `<div class="card" ` + onclickHandler + `>
                <div class="card-title">` + thisElement.blog_title + `</div>
                <div class="card-description">` + thisElement.blog_description + `</div>
                </div>`; 

                mainContent.innerHTML += currentCard;
            };

        })
        .catch(error => {
            console.error("getBlog() error: ", error);
        });
}

function gotoHome() {
    renderAllBlogs('mainContent');

    window.document.getElementById('mainContent').style.display = 'block';
    window.document.getElementById('dashboard').style.display = 'none';
    window.document.getElementById('signin').style.display = 'none';    
    window.document.getElementById('login-container').style.display = 'none';    
}

function gotoDashboard() {
    renderAllBlogs('dashboard');

    window.document.getElementById('mainContent').style.display = 'none';
    window.document.getElementById('dashboard').style.display = 'block';
    window.document.getElementById('signin').style.display = 'none';       
    window.document.getElementById('login-container').style.display = 'none';
}

function gotoSignin() {
    window.document.getElementById('mainContent').style.display = 'none';
    window.document.getElementById('dashboard').style.display = 'none';
    window.document.getElementById('signin').style.display = 'none';  
    window.document.getElementById('login-container').style.display = 'block';
}

function gotoLogout() {
    gotoHome();
}