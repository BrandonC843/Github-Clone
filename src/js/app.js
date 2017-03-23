import $ from 'jquery'
import {githubApiKey} from '../../secrets.js'


// build it similar to demos on Day-23 and Day-24/////
// select the container you want to dynamically render it to from index.html
var appContainerEl = document.querySelector('#app-container');
// buid the HTML template
function buildGitHubTemplate(profileApiData, repositoryApiData){
   var repositoryList = repositoryApiData
   var createRepositoryListHtmlComponent = repositoryList.map(function(reposObj){
      // console.log(reposObj);
      return`
         <div class='repos-col'>
            <hr>
            <p><strong>${reposObj.name}</strong></p>
            <p>${reposObj.description} | ${reposObj.language} | ${reposObj.created_at}</p>

         </div>
      `
   }).join('')
console.log(profileApiData);
   return`
   <div class="fluid-container">
      <div class ="row profile-col">
         <div class = "col-xs-3 col-md-3 container">
            <img src="${profileApiData.avatar_url}"/>
            <p>${profileApiData.name}</p>
            <p>${profileApiData.login}</p>
            <button class="follow" type="button">FOLLOW</button>
            <h3>Block or Report user</h3>
            <hr>
            <p><strong>${profileApiData.company}</strong></p>
            <p><strong>${profileApiData.location}</strong></p>
            <p><strong>${profileApiData.email}</strong></p>
            <p><strong>${profileApiData.html_url}</strong></p>
         </div>
         <div class = 'col-xs-9 col-md-9 container'>
            ${createRepositoryListHtmlComponent}
         </div>
      </div>
   </div>
   `
}

// set up controllerRouter//

var controllerRouter = function(){
var currentRoute = window.location.hash.slice(1)

   if(currentRoute.length === 0){
         currentRoute = '';
         // fetching profile //
         var myProfilePromise = $.getJSON(`https://api.github.com/users/BrandonC843?access_token=${githubApiKey}`)
         // fetching repos //
         var myRepositoryPromise = $.getJSON(`https://api.github.com/users/BrandonC843/repos?access_token=${githubApiKey}`)

// mutli-fetch promise-day24
      $.when(myProfilePromise, myRepositoryPromise).then(function(profileData, repositoryData){
        appContainerEl.innerHTML = buildGitHubTemplate(profileData[0], repositoryData[0]);
      })
   }
   if(currentRoute !== ''){
      var myProfilePromise = $.getJSON(`https://api.github.com/users/` + currentRoute)
      var myRepositoryPromise = $.getJSON(`https://api.github.com/users/` + currentRoute + `/repos`)

      $.when(myProfilePromise, myRepositoryPromise).then(function(profileData, repositoryData){
      appContainerEl.innerHTML = buildGitHubTemplate(profileData[0], repositoryData[0])
      })
   }
}

var profileText = document.querySelector('input');
    profileText.addEventListener('keypress', function(evt){
      if(evt.keyCode === 13){
      window.location.hash = profileText.value
   }
})
   controllerRouter()
   window.addEventListener('hashchange', controllerRouter);
   profileText.addEventListener('keypress', controllerRouter);
