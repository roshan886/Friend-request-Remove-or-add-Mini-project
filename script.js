let btn=document.querySelector("button");
let flag=0;

btn.addEventListener("click",()=>{
  if(flag==0){
    document.querySelector("h5").textContent="Friends"
    document.querySelector("h5").style.color="green"
    btn.innerText="Remove friend"
    flag=1;

  }
  else{
    document.querySelector("h5").textContent="stranger";
    document.querySelector("h5").color="red"
    flag=0
    alert("your friend is removed")
  }
})

