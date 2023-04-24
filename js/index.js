document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const userContent = document.querySelector('#user-content');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = form.querySelector('input').value;
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        const users = data.items;
        console.log(users);

        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = ` <img src=${user.avatar_url} class="user-img-top" alt="">
                                <p class="user-name">${user.login}</p>
                                <a href=${user.html_url} target="_blank">Link to ${user.login}'s GitHub Profile</a>
                                <button>View Repos</button>`
          userContent.appendChild(userDiv);
        });
      });
    
  });
});

// Link to Tugi-Ngunjiri Github Profile

// document.addEventListener("DOMContentLoaded", () =>{
//   fetch ('https://api.github.com/users/octocat/repos')
//   .then(response => response.json())
//   .then(data => {
  
//   })
//   const userContent = "https://api.github.com/users/octocat/repos";
//   console.log(userContent)
// const repos = data.map(repo => {
//      data.users.forEach(user => {
//       let user = document.createElement('div')
//       user.classList.add = ("col -md-3")
//       user.innerHTML = ` <div>
//   <a href="${repo.owner.html_url}">${repo.owner.login}</a>
//    </div>`
//    userContent.appendChild(userName);
//      });
 
//      })  
//  })

 