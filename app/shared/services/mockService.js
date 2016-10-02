'use strict';
angular.module('app')
	.factory('mockService', ['appConstants' , function (appConstants) {
		var service = {};
		service.series = function (){
			var series=[];
			return series;
		}


		return service;

	}]);