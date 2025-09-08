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
        url.then(pro=>pro.json())
        .then(res=>displayCard(res.plants))
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
                                    <h2 class="card-title font-semibold text-[#1F2937] text-2xl">${cardShow.name}</h2>
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

    const singleCategory=(dd)=>{
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
                                    <h2 class="card-title font-semibold text-[#1F2937] text-2xl">${d.name}</h2>
                                    <p class="text-[#1F2937] text-base">${d.description}</p>
                                    <div class="flex justify-between items-center">
                                        <button class="btn bg-[#DCFCE7] text-[#15803D] rounded-full py-1 px-3">${d.category}</button>
                                        <h1 class="text-[#1F2937] font-semibold text-xl">৳${d.price}</h1>
                                    </div>
                                  <div class="card-actions justify-center w-full">
                                    <button class="btn rounded-full mt-3 p-4 bg-[#15803D] text-white w-full font-medium text-xl hover:bg-green-500 shadow-sm">Add to Cart</button>
                                  </div>
                                </div>
                            </div>
            `;
            
            cardContainer.appendChild(div)
        })
    }


categoryCard()
card()

