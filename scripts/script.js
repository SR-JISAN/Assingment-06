// ----------categories-----------==>
    
    const categories =()=>{
       const url = fetch('https://openapi.programming-hero.com/api/categories');
       url.then(categoryPro=> categoryPro.json())
    .then(categoryRes =>{
      categoryDisplay(categoryRes.categories)
     }) 
    } 

    const categoryDisplay=(display)=>{
        const setCategory = document.getElementById('categories');
        setCategory.innerHTML='';
        
        display.forEach(data => {
            const btn = document.createElement('div')
            btn.innerHTML = `
            <button id="${data.id}"  class="w-full btn   border-0 hover:bg-[#15803D] hover:text-white bg-[#F0FDF4]  rounded-lg text-xl py-4  font-semibold mb-2 removing">${data.category_name}</button>
            `
            setCategory.appendChild(btn)  
        });
    }

        // ---------adding-removing---------styles
   document.getElementById('categories').addEventListener('click',(event)=>{
               const btns = document.querySelectorAll('.removing')
               btns.forEach(btn=>{
                btn.classList.remove('bg-green-800')
                btn.classList.remove('text-white')
               })
               categoryCard(event.target.id)
                if(event.target.localName === 'button'){
                
                  event.target.classList.add('bg-green-800') 
                }
                if(event.target.localName === 'button'){
                  event.target.classList.add('text-white') 

                }
                
   })
    
categories()

// ----------------------card-part-------------------------

   const card=()=>{
        const url = fetch('https://openapi.programming-hero.com/api/plants')
        url.then(pro1=>pro1.json())
        .then(res1=>displayCard(res1.plants))
    }

    const displayCard =(cardShows)=>{
        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML=''
        cardShows.forEach(cardShow => {
            const div = document.createElement('div')
            div.innerHTML =`
            <div class="card h-[550px] bg-white px-4 py-4 rounded-lg shadow-sm">
                                 <figure class="h-[35%]">
                                    <img src="${cardShow.image}" alt="${cardShow.name}" />
                                 </figure>
                                <div class="card-body h-[65%]  px-0">
                                    <h2 onclick="loadCardDetails(${cardShow.id})" class="card-title font-semibold text-[#1F2937] text-2xl">${cardShow.name}</h2>
                                    <p class="text-[#1F2937] text-base">${cardShow.description}</p>
                                    <div class="flex justify-between items-center">
                                        <button class="btn bg-[#DCFCE7] text-[#15803D] rounded-full py-1 px-3">${cardShow.category}</button>
                                        <h1 class="text-[#1F2937] font-semibold text-xl">৳${cardShow.price}</h1>
                                    </div>
                                  <div class="card-actions justify-center w-full">
                                    <button class="btn rounded-full mt-3 p-4 bg-[#15803D] text-white w-full font-medium text-xl hover:bg-green-500 shadow-sm">Add to Cart</button>
                                  </div>
                                </div>
                            </div>
            `;
            
            cardContainer.appendChild(div)
        
        });
    }

// ---------------category to card----------------
    const categoryCard=(id)=>{
        const url = fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        url.then(propa=>propa.json())
        .then(res2=>singleCategory(res2.plants))
    }

   let singleCategory = (dd = []) => {
          if (!dd || !Array.isArray(dd)) {
          console.warn("singleCategory expected an array but got:", dd);
          return;
         }
        const cardContainer = document.getElementById('card-container')
            cardContainer.innerHTML=''
            dd.forEach((d)=>{
            const div = document.createElement('div')
            div.innerHTML =`
            <div class="card h-[550px] bg-white px-4 py-4 rounded-lg shadow-sm">
                                 <figure class="h-[35%]">
                                    <img src="${d.image}" alt="${d.name}" />
                                 </figure>
                                <div class="card-body h-[65%]  px-0">
                                    <h2 onclick="loadCardDetails(${d.id})" class="card-title font-semibold text-[#1F2937] text-2xl">${d.name}</h2>
                                    <p class="text-[#1F2937] text-base">${d.description}</p>
                                    <div class="flex justify-between items-center">
                                        <button class="btn bg-[#DCFCE7] text-[#15803D] rounded-full py-1 px-3">${d.category}</button>
                                        <h1 class="text-[#1F2937] font-semibold text-xl">৳${d.price}</h1>
                                    </div>
                                  <div class="card-actions justify-center w-full">
                                    <button id="cat-btn${d.id}" class="btn rounded-full mt-3 p-4 bg-[#15803D] text-white w-full font-medium text-xl hover:bg-green-500 shadow-sm">Add to Cart</button>
                                  </div>
                                </div>
                            </div>
            `;
            
            cardContainer.appendChild(div)
        })
        

    }

// ---------------------------------modal--------------


const loadCardDetails=(id)=>{
    const url = fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    url.then(pro => pro.json())
    .then(res=> modal(res.plants))
};

const modal=(modalData)=>{
        const setModal = document.getElementById('card_modal')
        
        setModal.innerHTML =`
        <div class="modal-box h-[400px]">
    <div>
    <h3 class="text-2xl mb-4  font-bold">${modalData.name}</h3>
    <figure class="h-[40%]">
      <img class="w-full" src="${modalData.image}" alt="${modalData.name}" />
    </figure>
    <p class="py-2 font-bold text-xl">Category:<span class ="text-[#1F2937] text-base font-normal"> ${modalData.category}</span></p>
    <p class="py-2 font-bold text-xl">Price:<span class ="text-[#1F2937] text-base font-normal"> ৳${modalData.price}</span></p>
    <p class="py-2 font-bold text-xl">Description:<span class ="text-[#1F2937] text-base font-normal"> ${modalData.description}</span></p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
      </div>
    </=div>
    </div>
        `;
        document.getElementById("card_modal").showModal()
        
}

// -----------------------add to cart---------------


categoryCard()
card()

