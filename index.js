const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "12,502"
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "15,137"
    }
];

// Function to render a single post
function renderPost(posts) {
    const mainEl = document.getElementById("post-container");
    let html = ""
    for (let i = 0; i < posts.length; i++) {
        html += `
        <section class="post">
        <div class="user-info container">
            <img class="avatar apic" id="user-img" src="${posts[i].avatar}">
            <div>
                <p class="bold normal" tabindex="0">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>

        <img class="post-img" src="${posts[i].post}">
        <div class="control-bar">
        <button aria-label="Like this post" class="icon-btn">
            <img class="icon like-btn icon1" src="images/icon-heart.png">
        </button>
        <button aria-label="Comment on the post" class="icon-btn">
            <img class="icon" src="images/icon-comment.png">
        </button>
        <button class="icon-btn" aria-label="Share this post">
            <img class="icon" src="images/icon-dm.png">
        </button>
        </div>
        <div class="after">
        <p class="bold like-count" >${posts[i].likes} likes</p>
        <span class="bold">${posts[i].username}</span>
        <p class="caption normal">${posts[i].comment}</p>
        </div>
        </section>
    `
    }
    mainEl.innerHTML = html;
    const likeButtons = document.querySelectorAll('.like-btn');
    const likeCount = document.querySelectorAll('.like-count');


    likeCount.forEach((count, index) => {
        console.log(count)
        count.id = `like-count-${index + 1}`;
    });

    likeButtons.forEach((button, index) => {
        button.id = `like-btn-${index + 1}`;
        button.addEventListener('click', function() {
            incrementLikes(`like-count-${index + 1}`);
        });
    });
   
}

function incrementLikes(index){
    const likeEl = document.getElementById(index);
    if (!likeEl){
        likeEl.innerText = "0 likes"
    }
    else if (likeEl.innerText === "0 likes"){
        likeEl.innerText = "1 like"
    }
    else{
    let Likes  = likeEl.innerText
    let currentLikes = parseInt(Likes.replace(/[^0-9]/g, ''), 10);
    console.log(currentLikes)

    currentLikes+=1
    currentLikes = currentLikes.toLocaleString();
    likeEl.innerText = currentLikes + " likes"}
}



renderPost(posts)