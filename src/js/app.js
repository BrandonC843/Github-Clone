import $ from 'jquery'
import { githubApiKey } from '../../secrets.js'
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
var fetchgitHubProfilePromise = $.getJSON('https://api.github.com/users/BrandonC843').then(function(serverRes){
   console.log(serverRes);
})
// var fetchGitHubRepoPromise = $.getJSON('https://api.github.com/users/BrandonC843/repos').then(function(serverRes){})
// console.log(serverRes)
var dynamicContent = document.querySelector('.dynamic')
var currentRoute = window.location.hash.slice(1)

var contentBuild = function(repoData, profileData){
   var profileDataString = '<div class = "profiles-right">'
   var repositoryDataString = '<div class = "repositories-left"'
}

var ProfileDataString += {`
   <img src="${profInfo.avatar_url}"/>
   <h2>${profInfo.name}</h2>
   <h3>${profInfo.login}</h3>
   <p>Block or report users</p>
   </hr>
   <p>${profInfo.blog}</p>
   <p><i class="fa fa-map-signs" aria-hidden="true"></i>${profInfo.location}</p>
   <p><i class="fa fa-envelope-square" aria-hidden="true"></i>${profInfo.email}</p>
   <p><i class="fa fa-link" aria-hidden="true"></i>${profInfo.html_url}</p>
   `}

   repositoryDataString += {`



      `}


      if(currentRoute === ''){
      var profilePromise = $.getJSON('https://api.github.com/users/BrandonC843');
      var reposPromise = $.getJSON('https://api.github.com/users/BrandonC843/repos');
      $.when(profilePromise, reposPromise).then(function(profileData, repoData){
        injectContent.innerHTML = contentBuild(profileData[0], repoData[0]);
      })
      return;
    }

 var fetchgitHubProfilePromise = $.getJSON('https://api.github.com/users/BrandonC843').then(function(serverRes){})
 var fetchGitHubRepoPromise = $.getJSON('https://api.github.com/users/BrandonC843/repos').then(function(serverRes){})
 console.log(serverRes)
.when(fetchGitHubProfile, fetchGitHubRepos).then(function(profileDataString, repoDataString){

   appContainerEl.innerHTML =
})
