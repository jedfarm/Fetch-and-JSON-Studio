// TODO: add code here
window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) { 
            const container = document.getElementById("container");

            let bioDetails = ["Hours in space: ", "Active: ", "Skills: "];
            let bioHeaders =["hoursInSpace", "active", "skills"];
            
            json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1);
            let total = document.getElementById("total");
            total.innerHTML = `Number of Astronauts: ${json.length}`;
            
            for (j = 0; j < json.length; j++){
                let iDiv = document.createElement('div');
                iDiv.className = 'astronaut';
                container.appendChild(iDiv);
                let innerDiv = document.createElement('div');
                innerDiv.className = 'bio';
                iDiv.appendChild(innerDiv);
                let h3 = document.createElement("h3");
                innerDiv.appendChild(h3);
                h3.innerHTML = json[j].firstName + " " + json[j].lastName; 
                let ul=document.createElement('ul');
                innerDiv.appendChild(ul);
                for (k = 0; k < 3; k++){
                    let li=document.createElement('li');
                    ul.appendChild(li);
                    // let activeSpan = document.createElement('span');
                    // activeSpan.innerHTML = json[j][bioHeaders[1][1]];
                    li.innerHTML = bioDetails[k] + json[j][bioHeaders[k]];
                    console.log(li.innerHTML);
                    if (k==1){
                        if (json[j][bioHeaders[k]]){
                            
                            li.id = "green";
                        } else {
                            li.id = "red";
                        }   
                    }
                    
                    
                }
                let img=document.createElement('img');
                img.className = 'avatar';
                iDiv.appendChild(img);
                img.src = json[j].picture;
            }
            console.log(json);
        });    
    

    });

});