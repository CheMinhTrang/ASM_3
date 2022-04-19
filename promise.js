



let gioDi = 19;

function con_tho_an_co () {
    console.log(`con tho an co luc ${gioDi}`)
    return new Promise((resolve, reject) =>{
        setTimeout(() => {                   
            console.log(`con tho an co xong luc ${gioDi+=1}h`)
            resolve(gioDi);
        }, 1000)
        
    })
}

function di_xem_phim () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {          
            resolve(gioDi)
            console.log(`con tho xem phim xong luc ${gioDi+=2}h`)
        }, 2000)
        
    })
}

function di_dao () {
    setTimeout(() => {        
        console.log(`con tho di dao xong luc ${gioDi+=1}h`)
    }, 1000)
}

con_tho_an_co() 
.then(() => {
    return di_xem_phim()
})
.then(() => {
    di_dao()
})

.catch(err => {
    console.log('co loi xay ra')
})