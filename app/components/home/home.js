'use strict';
angular.module('app')
	.controller('homeCtrl', ['mockService',function (mockService) {
		var vm = this;
		vm.slides = mockService.series();
		vm.homeComment = mockService.comments('home');
		console.log(vm.homeComment)
		vm.active = 0;
		vm.noWrapSlides = false;
		vm.myInterval = 4000;

	}]);