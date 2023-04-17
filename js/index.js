document.addEventListener("DOMContentLoaded", () =>{
  fetch ('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(data => {
  
  })
  console.log(userContent)
  const userContent = "https://api.github.com/users/octocat/repos";
const repos = data.map(repo => {
     data.users.forEach(user => {
      let user =document.createElement('div')
      user.classList.add = ("col -md-3")
      user.innerHTML = ` <div>
    <div class ="user-body>
      <h5 class="user-title">${user.title}</h5>
      <h6>${user.content}</h6>
      <p class="user-text">${user.description}</p>
      </div>
   </div>`
   userContent.appendChild(user);
     });
 
     })  
 })