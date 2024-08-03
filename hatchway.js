document.addEventListener("DOMContentLoaded", function() {
    let memeForm = document.getElementById("meme-form");
    let listGallery = document.querySelector(".gallery");
    let deleteBtn = document.getElementById("deleteBtn");
    
    
    memeForm.addEventListener('submit', function(e){
        e.preventDefault();

        // creating li element

        let memeList = document.createElement("li");
        memeList.classList.add("meme-img");

        // creating canvas to put meme images in background

        let topText = document.getElementById("topText");
        let imgURL = document.getElementById("image").value
        let  src = imgURL
        let img = document.createElement("img");
        img.src = src;

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerHTML = document.getElementById("topText").value;
    
        let bttmTextDiv = document.createElement("div");
        bttmTextDiv.classList.add("text", "bottom");
        bttmTextDiv.innerHTML = document.getElementById("bottomText").value;


        let removeDiv = document.createElement("div");
        removeDiv.classList.add("red-X");
        removeDiv.innerText = "X";
        removeDiv.style.color = "red";
        removeDiv.style.cursor = "pointer";

       deleteBtn.addEventListener("click", function() {
            memeList.remove();
           alert("Delete button pressed");
        })

       
        memeList.appendChild(img);
        memeList.appendChild(topTextDiv);
        memeList.appendChild(bttmTextDiv);
        memeList.appendChild(removeDiv);
        listGallery.appendChild(memeList);
        memeForm.reset();
    });

        memeList.strokeStyle = 'black';
        memeList.lineWidth = Math.floor(fontSize / 4);
        memeList.fillStyle = "white";

    });


