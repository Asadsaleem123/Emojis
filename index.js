const emojiContainer=document.getElementById("emoji-container")
const inputEl=document.getElementById("emoji-input")
const btnAddToEnd=document.getElementById("push-btn")
const btnAddToStart=document.getElementById("unshift-btn")
const btnDelFromStart=document.getElementById("shift-btn")
const btnDelFromEnd=document.getElementById("pop-btn")
let myArray=['😀','😁','😆']
render(myArray)
btnAddToEnd.addEventListener("click",function(){
    if(inputEl.value){
        myArray.push(inputEl.value)
        render(myArray)
    }else{
        alert("value cannot be empty")
    }
})
function render(array){
    inputEl.value=""
    emojiContainer.innerHTML=""
   for(let i=0;i<array.length;i++){
    let emojis=document.createElement("span")
    emojis.textContent=array[i]
    emojiContainer.append(emojis)
   }
}
btnAddToStart.addEventListener("click",function(){
  
    if(inputEl.value){
        myArray.unshift(inputEl.value)
        render(myArray)
    }
   
})
btnDelFromEnd.addEventListener("click",function(){
    myArray.pop()
    render(myArray)
})
btnDelFromStart.addEventListener("click",function(){
    myArray.shift()
    render(myArray)
})