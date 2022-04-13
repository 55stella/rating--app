

const  all = document.querySelectorAll('.numbers')
let ItemSelected =[]
let thankyou = document.querySelector('.Thank-you')
let  summit = document.querySelector('.Submit')
let ratingContainer = document.querySelector('.rating-container')
// let result = document.querySelector('.result')

function DisplayRating(){
    let result = document.querySelector('.result')
    result.innerHTML = ` you selected ${ItemSelected.slice(-1)} out of ${all.length} `    
    return result

}

all.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('selected')
        if(element.classList.contains('selected')){
            ItemSelected.push(element.innerHTML)
            DisplayRating()   
            console.log(ItemSelected)

        }
    })
    
});

summit.onclick=()=>{
    thankyou.style.display='none' ? 'flex': 'none'
    ratingContainer.style.display ='flex'? 'none':'flex'     

}
    


