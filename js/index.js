document.addEventListener("DOMContentLoaded", () =>{
  fetch ('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(data => {
  
  })
  const userContent = "https://api.github.com/users/octocat/repos";
  console.log(userContent)
const repos = data.map(repo => {
     data.users.forEach(user => {
      let user =document.createElement('div')
      user.classList.add = ("col -md-3")
      user.innerHTML = ` <div>
    <div class="row">
    <div class="col -md-3">
    
   </div>`
   userContent.appendChild(userName);
     });
 
     })  
 })

 