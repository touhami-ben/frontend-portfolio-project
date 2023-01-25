const BASE_URL = "https://swapi.dev/api/people"

const form = document.querySelector('form')
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const {name} = event.target;
    // or const name = event.target.name
    peopleByName(name.value);
    form.reset();
})
function peopleByName(name){
 
fetch(`${BASE_URL}`)
.then((response) => response.json())
.then((people) => {

    console.log(people)

    for(let person of people){
        return person.films
    }
    // const films = people.films;
    // const name = people.name;
    
    const article = document.createElement('article');
    article.innerHTML = `< a href="${films}/>
    // <h2>${name} has been in ${films}`
    const a = document.createElement("a");
    a.addEventListener("a", (event)=> {
        event.preventDefault();
        event.target.people.films;
    
    document.querySelector(".people").append(article);

    })
    

})
.catch((error) =>{
    const section = document.createElement("section");
    section.setAttribute("class", "error");
    const p = document.createElement("p");
    p.textContent ='there was an error';
    section.append(p)
    const p2 =document.createElement("p");
    p2.setAttribute("class", "message");
    p2.textContent =`${error}`
    section.append(p2)
    // console.log(error)
    // console.log(section);

    const main = document.querySelector("main");
    main.append(section)
    
});
}