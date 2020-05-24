// let lis = document.querySelectorAll("li");
//
// for(let i = 0; i < lis.length; i++){
//  lis[i].addEventListener("mouseover", function(){
//    this.style.color = "red";
//  });
//  lis[i].addEventListener("mouseout", function(){
//    this.style.color = "black";
//  });
// lis[i].addEventListener("click", function(){
//   this.classList.toggle("done");
// })
// }

let list = document.querySelector('ul');

list.addEventListener('mouseover', function(event){
		//conditional here
		list.style.color = "red"
	})
    list.addEventListener('mouseout', function(event){
		//conditional here
		list.style.color = "black";
	})
    list.addEventListener('click', function(event){
		//conditional here
		list.classList.toggle("done");
	});
