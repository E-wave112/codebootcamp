const reviews = [
    {
    id:1,
    img:"images/image-tanya.jpg",
    review:"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so  excited about the future.",
    name:"Tanya Sinclair",
    job:"UX Engineer"
    },

    {
    id:2,
    img:"images/image-john.jpg",
    review: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name:"John Tarkpor",
    job:"Junior Frontend-Developer"
    }
]
const image = document.getElementById("imagess");
const review = document.getElementById("reviews");
const names = document.querySelector("#bolden");
const profs = document.getElementById("prof");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

//initiate an empty js instance

let item = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson(item)

  });




  function showPerson(){

   

    const items = reviews[item];
    image.src = items.img;
    review.textContent = items.review;
    names.textContent = items.name;
    profs.textContent = items.job;
   
  
  }
  //show next person
  
  nextBtn.addEventListener('click',function(){
    item++;
    
    if (item > reviews.length - 1){
      item = 0;
    }
    showPerson(item);
  
  })
  //show prev person
  prevBtn.addEventListener('click',function(){
    item--;
    
    if (item < 0){
      item = reviews.length - 1;
    }
    showPerson(item);
  
  })
  