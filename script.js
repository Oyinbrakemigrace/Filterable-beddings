(function(){


let buttons = document.querySelectorAll('.btn')
let sheetImages = document.querySelectorAll('.sheets')


buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        let filter = e.target.dataset.filter

        sheetImages.forEach((sheet)=>{
            if(filter==='all'){
                sheet.style.display = 'block'
            }else{
                if(sheet.classList.contains(filter)){
                    sheet.style.display = 'block'
                }else{
                    sheet.style.display = 'none'
                }
            }
        })
    })
})
})();