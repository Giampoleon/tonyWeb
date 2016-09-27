'use strict';
angular.module('app')
	.factory('mockService', ['appConstants' , function (appConstants) {
		var service = {};
		service.images = function (){
			var images=[]

			images.push({id:1, text: "Viviendo la vida", image:appConstants.IMAGES_PATH +'1.jpg'});
			images.push({id:2, text: "Relajando", image:appConstants.IMAGES_PATH +'2.jpg'});
			//images.push({id: "Dejame pensar", image:appConstants.IMAGES_PATH +'3.jpg'});
			return images;
		}


		return service;

	}]);