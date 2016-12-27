'use strict';

angular.module('chairApp')
.service('localStorage', [function() {


	this.init = function () {
		if(this.get() === null){
			var LS = [];
			localStorage.setItem('cart', JSON.stringify(LS));
		}
	};

	this.get = function(){
		return JSON.parse(localStorage.getItem('cart'));
	};

	this.set = function(item){
		var currentCart = this.get();
		var added = false;
		if(currentCart != null){
			for(var i=0; i<currentCart.length;i++){
				if(currentCart[i].reference == item.reference){
					currentCart[i].qty++;
					added = true;
				}
			}
			if(!added){
				var itemToAdd = item;
				itemToAdd.qty = 1;
				currentCart.push(itemToAdd);
			}
		}
		else{
			currentCart = [];
			var itemToAdd = item;
			itemToAdd.qty = 1;
			currentCart.push(itemToAdd);
		}


		localStorage.setItem('cart', JSON.stringify(currentCart));
	};
}]);