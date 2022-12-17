
    const productContainer=[...document.querySelectorAll(".product-container")]
    const nxtbtn= [...document.querySelectorAll(".nxt-btn")];
    const prebtn= [...document.querySelectorAll(".pre-btn")];

    productContainer.forEach((item,i)=>{
        let containerDimensions= item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtbtn[i].addEventListener("click",()=>{
            item.scrollLeft +=containerWidth;
        })

        prebtn[i].addEventListener("click",()=>{
            item.scrollLeft -= containerWidth;
        })
    })
