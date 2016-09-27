'use strict';
angular.module('app')
	.controller('homeCtrl', ['mockService',function (mockService) {
		var vm = this;
		vm.slides = mockService.images();
		vm.active = 0;
		vm.noWrapSlides = false;
		vm.myInterval = 5000;
		console.log(vm.slides)

	}]);