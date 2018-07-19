function addClass(number) {
		const menu = document.querySelector('.items__product--'+number) ;
		menu.classList.toggle('items__toggles');
}
window.onload= addClass;
window.onload = function() {
	function addToBasket() {
		const basket = document.querySelectorAll('.items__toggles').length;
		const cart = document.querySelector('.sectionTwo__error') ;
		 
		if(basket === 0){

		cart.innerHTML += "Please select one or more item.";
		}else{

		const cart = document.querySelector('#cart__circle') ;
		cart.className = "cart__number";
		cart.innerHTML = basket;
		if(basket>=10){ cart.style.paddingLeft = "4px";  }
		else{cart.style.paddingLeft = "7px";}
		}
	}
	document.getElementById("sectionTwo__button").addEventListener("click",addToBasket );
};
