const cartBtn = document.querySelectorAll(".add-cart");
const cartContainer =document.querySelector('tbody');
const quantityNum =document.querySelector('.num');

cartBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        addToCart(e)
    })
})
function addToCart(event){
    let btn = event.target;
    let btnParent = btn.parentElement;
    let btnGreatParent = btn.parentElement.parentElement;
    let itemName = btnParent.children[1].innerText;
    let itemImage = btnParent.children[0].src;
    let itemPrice = btnParent.children[2].innerText;
  
    let itemContainer = document.createElement('tr');
    itemContainer.innerHTML =`<td><input type="checkbox"></td>
    <td>
        <img src=${itemImage} alt="banana" class="bread">
    </td>
    <td>${itemName}</td>
    <td>${itemPrice}</td>
    <td>
        <input type="number" value="1">
    </td>
    <td>${itemPrice}</td>
    <td>
        <button class="remove">REMOVE</button>
    </td>`
    
    cartContainer.append(itemContainer);

    quantityNum.addEventListener("change", (e)=>{
        totalCost(e);
        
    })
    
}
function totalCost(event){
    let numTarget = event.target;
    console.log(numTarget);
    numGrandPa = numTarget.parentElement.parentElement;
    priceNum = numGrandPa.querySelector('.price')[0];
    totalNum = numGrandPa.querySelector('.total')[0];
   
}










// let products = [
//     {
//         name: 'bread 1',
//         tag:'breadone',
//         price:15,
//         inCart: 0
//     },
//     {
//         name: 'bread 2',
//         tag:'breadtwo',
//         price:22,
//         inCart: 0
//     },
//     {
//         name: 'bread 3',
//         tag:'breadthree',
//         price:35,
//         inCart: 0
//     },
//     {
//         name: 'bread 4',
//         tag:'breadforth',
//         price:12,
//         inCart: 0
//     },
// ];
// for (let i=0; i<cartBtn.length; i++){
//     cartBtn[i].addEventListener("click",()=>{
//        carNumbers(products[i]);
//     })
       
// }
// // cartBtn.forEach((btn)=>{
// //      btn.addEventListener("click", (e)=>{
// //         console.log(products[])
// //      })
// // })


// function windowNumbers(){
//     let productNumbers = localStorage.getItem('number');
//     if(productNumbers){
//         document.querySelector('.cart span').textContent = productNumbers;
//     }

// }

// function carNumbers(product){
//     console.log("the one you cliked is", product);
//     let productNumbers = localStorage.getItem('number');
//     productNumbers = parseInt(productNumbers);
//     if(productNumbers){
//         localStorage.setItem('number', productNumbers +1);
//         document.querySelector('.cart span').textContent = localStorage.number;
//     }else{
//         localStorage.setItem('number', 1);
//         document.querySelector('.cart span').textContent = localStorage.number;

//     }
    
// }

// windowNumbers();


