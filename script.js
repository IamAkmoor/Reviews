const reviews = [{
    img: "https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg",
    author:"John David",
    job: "Web Developer",
    info: "I had three different appointments at Conceptions, and each time the staff was well informed, friendly, and kind. You could see they really care about their customers. There are no words to thank them enough."
},{
    img: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?cs=srgb&dl=pexels-sound-on-3760854.jpg&fm=jpg",
    author:"Ashlee Torres",
    job: "Anthropologist",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},{
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
    author:"Sam Zuniga",
    job: "Engineer",
    info: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author:"Terrell Gibbs",
    job: "Homeopath",
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
},{
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author:"Jessica Haley",
    job: "Television presenter",
    info: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
},{
    img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author:"Luci Coffey",
    job: "Crane driver",
    info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
},{
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author:"Hubert Stuart",
    job: "Labourer",
    info: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"
},{
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author:"Arnie Reeve",
    job: "Surgeon",
    info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
}];

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

let current = 0;

randomBtn.addEventListener("click", ()=>{
    current = Math.floor(Math.random()*reviews.length);
    showPerson(current)
});

function showPerson(person) {
    const item = reviews[person];
    personImg.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

prevBtn.addEventListener("click", ()=>{
    current--
    if(current < 0){
        current = reviews.length-1
    }
    showPerson(current)
});

nextBtn.addEventListener("click", ()=>{
    current++
    if(current > reviews.length-1){
        current = 0
    }
    showPerson(current)
})