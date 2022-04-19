



let gioDi = 19;

function con_tho_an_co (hanh_dong_sau_an_co) {
    setTimeout(() => {        
        console.log(`con tho an xong luc ${gioDi+=1}h`)
        hanh_dong_sau_an_co();
    }, 1000)
    console.log(`con tho an co luc ${gioDi}h`)
};

function con_tho_di_xem_phim (hanh_dong_sau_xem_phim) {
    setTimeout(() => {
        console.log(`con tho di xem phim luc ${gioDi+=2}h`)
        hanh_dong_sau_xem_phim();
    }, 2000)
}

function con_tho_di_dao () {
    setTimeout(() => {
        console.log(`con tho di dao luc ${gioDi+=1}h`)
    }, 1000)
}

con_tho_an_co(()=> {
    con_tho_di_xem_phim(() => {
        con_tho_di_dao()
    })
})