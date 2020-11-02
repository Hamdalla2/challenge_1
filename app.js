let c=function(x){
if(x.innerText==="N"){x.innerText="X";x.style.color="red"}
else if(x.innerText==="X"){x.innerText="O";x.style.color="blue"}
else{x.innerText="N";x.style.color="pink"}
console.log(x.id +" : "+x.innerText)
}