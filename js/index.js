document.addEventListener("DOMContentLoaded", () =>{
  fetch ('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(data => {
  
    console.log(data.users)
 
     data.users.forEach(user => {
      let user =document.createElement('div')
      user.classList.add = ("col -md-3")
      user.innerHTML = ` <div  class="user" style="width: 18rem;">
    <div class ="user-body>
      <h5 class="user-title">${user.title}</h5>
      <h6>${user.githubusercontent}</h6>
      <p class="user-text">${user.description}</p>
      </div>
   </div>`
   userContent.appendChild(user);
     });
 
     })  
 })