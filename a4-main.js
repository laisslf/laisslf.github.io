
var filterType = ""; 

addEventListener("DOMContentLoaded", function(){
    loadTableWithFilters();    
});
function loadTableWithFilters(){
    let table = document.querySelector("#main-table-body");
    table.innerHTML = "";
    for (let i = 0; i < petData.length; i++) {        
        if(petData[i].type === filterType || filterType === ""){            
            let image = document.createElement("img");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");            
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let tr = document.createElement("tr");
            image.src = petData[i].image.src;
            image.alt = petData[i].image.alt;
            image.width = petData[i].image.width;
            image.height = petData[i].image.height;
            image.className = petData[i].type;
            h4.innerText = petData[i].name;
            p.innerHTML = petData[i].description;           
            td1.appendChild(image);
            td2.appendChild(h4);
            td2.appendChild(p);           
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);                                            
        }        
    }
    let gato = document.querySelectorAll(".gato");
    let outro = document.querySelectorAll(".outro");
    let branca = document.querySelectorAll(".branca");
    let gatinho = document.querySelectorAll(".gatinho");
    for (let index = 0; index < gato.length; index++) {
        gato[index].addEventListener("click", function(){
            filterGato();             
        });
    }
    for (let index = 0; index < outro.length; index++) {
        outro[index].addEventListener("click", function(){
            filterOutro();
        });        
    }
    for (let index = 0; index < branca.length; index++) {
        branca[index].addEventListener("click", function(){
            filterBranca();
        });       
    }   
    for (let index = 0; index < gatinho.length; index++) {
        gatinho[index].addEventListener("click", function(){
            filterGatinho();
        });       
    }                 
}

function filterOutro(){
    filterType = "outro";
    loadTableWithFilters();    
}

function filterBranca(){
    filterType = "branca";
    loadTableWithFilters();    
}

function filterGato(){
    filterType = "gato";
    loadTableWithFilters();    
}
function filterGatinho(){
    filterType = "gatinho";
    loadTableWithFilters();    
}

function filterAllPets(){
    filterType = "";    
    loadTableWithFilters();   
}


