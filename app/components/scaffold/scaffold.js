'use strict';

angular.module('app')
	.controller('scaffoldCtrl', ['$state', function ($state) {
		var vm = this;
		vm.currentNavItem = 'home';
		$state.go("menu.home");

	}]);