const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

// edit button------>
const newBtn = document.querySelectorAll('li');
newBtn.forEach((item) =>{
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  item.appendChild(editBtn);
});

form.addEventListener('submit', function (event){
    event.preventDefault();
    // for Addition-------->

    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd.value);
    newLi.className = 'fruit';
    newLi.appendChild(newLiText);
    const btn = document.createElement('button');
    const btnText = document.createTextNode('x');
    btn.className = 'delete-btn';
    btn.appendChild(btnText);
    newLi.appendChild(btn);
    fruits.appendChild(newLi);
   const edBtn = document.createElement('button');
   const edBtnText = document.createTextNode('Edit');
   edBtn.appendChild(edBtnText);
   edBtn.className = 'edit-btn';
   newLi.appendChild(edBtn)
})

// delete item------->
fruits.addEventListener('click',function(event){
   if(event.target.classList.contains('delete-btn'))
   {
    const fruitsToDelete = event.target.parentElement;
    fruits.removeChild(fruitsToDelete);
   }
 
})


// filter items-------->

const filter = document.getElementById('filter');
filter.addEventListener('keyup',function(event)
{
   const textCentered = event.target.value.toLowerCase();
   const availbleFruits = document.getElementsByClassName('fruit');
   for(let i=0; i<availbleFruits.length; i++)
   {
      const currentFruit = availbleFruits[i].firstChild.textContent.toLowerCase();
      if(currentFruit.indexOf(textCentered) === -1)
      {
         availbleFruits[i].style.display = 'none';
      }
      else{
         availbleFruits[i].style.display = 'flex';
      }
   }
})



