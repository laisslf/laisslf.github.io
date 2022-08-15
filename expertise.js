var httpRequest; 
    
      function makeRequest() {
        var url = 'https://reqres.in/api/users?page=1';
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
          alert('Cannot create an XMLHTTP instance');
          return false;
        }
        httpRequest.onreadystatechange = showContents;       
        httpRequest.open('get', url, true);
        httpRequest.send();
      }
      function showContents() {
        if (httpRequest.readyState === 4) {          
          if (httpRequest.status === 200) {            
            var data = JSON.parse(httpRequest.responseText);
            console.log('The fetched data', data);
            for (let i = 0; i < data.data.length; i++) {        
                        
                    let image = document.createElement("img");
                    let div = document.createElement("div");
                    let h3 = document.createElement("h3");
                    let p = document.createElement("p");            
                    let article = document.createElement("article");
                    image.src = data.data[i].avatar;
                    image.alt = data.data[i].first_name;                        
                    div.className = "content";
                    article.className = "card";
                    h3.innerText = data.data[i].first_name + " " + data.data[i].last_name;
                    p.innerHTML = "<span>E-mail: </span><br>" + data.data[i].email;           
                    article.appendChild(h3);
                    article.appendChild(image);                        
                    article.appendChild(div);
                    div.appendChild(p);
                    document.querySelector(".cards").appendChild(article);                                           
                        
            } 
          } else {
            alert('There was a problem with the request.');
          }
        }
      }

      window.onload = makeRequest;