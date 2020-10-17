fetch(`https://api.thecatapi.com/v1/images/search?limit=3&page=100&order=DESC`)
   .then(response => response.json())
  //  .then(posts => console.log(posts))
   .then(characters => showCharacters(characters));


// };
   showCharacters = (characters) => {
    // const charactersDiv = document.querySelector(`#rick-and-morty-  characters`);
    // characters.forEach(character => {
    //   const characterElement = document.createElement(`p`);
    //   characterElement.innerText = `Character Name: ${character.name}`;
    //   charactersDiv.append(characterElement);
    // });

    const charactersDiv = document.querySelector('#ours'); 

    characters.forEach(character => {
      console.log('charactersss that As7ar see now',characters);

      // const characterElement = document.createElement(`p`);
      // characterElement.innerText = "Hello";
      // `Character Name: ${character.name}`;
      // charactersDiv.append(characterElement);
    // const charactersDiv = document.querySelector('#catsGallery'); // document

    // const characterElement = document.createElement("div");
    // // console.log('characterrrr',charachter);
    // characterElement.innerText = `Cats id: ${character.id}`;
    // charactersDiv.append(characterElement);


 var catGallerySmall = document.createElement("div");
    catGallerySmall.setAttribute("class", "small");
    charactersDiv.append(catGallerySmall);
    // image

    // <img src="" alt="">
    
    var oImg = document.createElement("img");
    oImg.setAttribute('src', character.url);
    catGallerySmall.append(oImg);


    const characterElement = document.createElement("p");
   characterElement.setAttribute("class", "kitty");
    characterElement.innerText = `Cats id: ${character.id}`;
    catGallerySmall.append(characterElement);

    });

    
  }


  function Cat(name, breed,color, age){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
  
}

var kittenForm = document.getElementById("addKittenForm");

kittenForm.addEventListener('submit',function(event) {
    event.preventDefault();
    var name = event.target.name.value;

    var breed = event.target.breed.value;
    var color = event.target.color.value;
    var age = event.target.age.value;
    
 
    var cat = new Cat(name, breed, color, age);
    cat.render();
}
);


Cat.prototype.render = function() {
    var parentElement = document.getElementById("catOut");


    var table = document.createElement('table');
    parentElement.appendChild(table);
    
    var row1 = document.createElement('tr');
    table.appendChild(row1);
    
    var row2 = document.createElement('tr');
    table.appendChild(row2);

    var th1 = document.createElement('th');
    row1.appendChild(th1);
    th1.textContent = 'Cat Name: ' ;

    var th2 = document.createElement('th');
    row1.appendChild(th2);
    th2.textContent = 'Cat Breed: ' ;

    var th3 = document.createElement('th');
    row1.appendChild(th3);
    th3.textContent = 'Cat Color: ' ;

    var th4 = document.createElement('th');
    row1.appendChild(th4);
    th4.textContent = 'Cat Age: ' ;


    var td1 = document.createElement('td');
    row2.appendChild(td1);
    td1.textContent = this.name;

    var td2 = document.createElement('td');
    row2.appendChild(td2);
    td2.textContent = this.breed;

    var td3 = document.createElement('td');
    row2.appendChild(td3);
    td3.textContent = this.color;

     var td3 = document.createElement('td');
    row2.appendChild(td3);
    td3.textContent = this.age;

};