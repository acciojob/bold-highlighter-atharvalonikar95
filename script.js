const words= document.querySelectorAll('strong')
function highlight(word) {
    //Write your code here
	words.forEach((word)=>{
		word.style.color="rgb(0, 128, 0)"
	})

}


function return_normal() {
    //Write your code here
	words.forEach((word)=>{
		word.style.color="rgb(0, 0, 0)"
	})
    
}
