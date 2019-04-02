(function(){
    'use strict'
var itemList=[
{id:1,name:'radha', price:'120',description:'good boy'},

{id:2,name:'radha2', price:'140',description:'cricketer'},
{id:3,name:'radha3', price:'20',description:'student'},
{id:4,name:'radha4', price:'60',description:'employee'},
]
// let x=itemList.filter(function(item,index){
//     return item.price>100;
// })
// console.log(x);


// let finalArray=itemList.filter((item,index)=>{
//     item.position=index;
//     return item.price>100;
// })
// console.log(finalArray);

 let x= itemList.filter(itemList=>itemList.price>10)
 console.log(x);
})();