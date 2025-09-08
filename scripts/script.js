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
            <button id="categoryBtn-${data.id}"  class="w-full btn   border-0 hover:bg-[#15803D] hover:text-white bg-[#F0FDF4]  rounded-lg text-xl py-4  font-semibold mb-2 removing">${data.category_name}</button>
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

                if(event.target.localName === 'button'){
                  event.target.classList.add('bg-green-800') 
                }
                if(event.target.localName === 'button'){
                  event.target.classList.add('text-white') 

                }
   })
    
categories()
