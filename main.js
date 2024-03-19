


// main varibles

theInput= document.querySelector(".get-repos input");
getButton= document.querySelector(".get-button");
reposData= document.querySelector(".show-data");


getButton.onclick= function(){
    getRepos();
}

function getRepos(){
    if(theInput.value== ""){
        reposData.innerHTML= "<span>Please Write Github Username.</span>"
    }
    else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((Response)=>Response.json())

        .then((repositories)=>{
            reposData.innerHTML= "";
            repositories.forEach(repo => {
                
                let mainDiv= document.createElement("div");
                reposData.appendChild(mainDiv);
                let repoName= document.createTextNode(repo.name);
                mainDiv.appendChild(repoName);
                mainDiv.classList.add("repoBox")

                let theUrl= document.createElement("a");
                mainDiv.appendChild(theUrl);
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                theUrl.setAttribute("target", "_blank");

                let theUrlText= document.createTextNode("Visit");
                theUrl.appendChild(theUrlText);

                let starsSpan= document.createElement("span");

                mainDiv.appendChild(starsSpan);

                let starsText= document.createTextNode(`Stars ${repo.stargazers_count}`);

                starsSpan.appendChild(starsText);


            });
        })

    }
}