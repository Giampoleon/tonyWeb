'use strict';
angular.module('app')
	.controller('homeCtrl', ['mockService',function (mockService) {
		var vm = this;
		vm.slides = mockService.images();
		console.log(vm.slides)

	}]);