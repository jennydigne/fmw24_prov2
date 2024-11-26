// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((post) => {
        const postEl = document.createElement("div");
        document.body.appendChild(postEl);
        const postTitle = document.createElement("p");
        postEl.appendChild(postTitle);
        postEl.textContent = post.title;
        const postBody = document.createElement("p");
        postBody.textContent = post.body;
        postEl.appendChild(postBody);
    })
}

getPosts();

