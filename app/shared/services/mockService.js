'use strict';
angular.module('app')
	.factory('mockService', ['appConstants' , function (appConstants) {
		var service = {};
		var comments = {
			home: {
				title:"Bienvenidos",
				text:"Un pequeño espacio libre de publicidad para los amantes de las series de ficción." +
				" Aqui encontrareís los tíulos mas famosos del genero y un fácil acceso a sus capítulos." +
				"Ponte cómodo y a disfrutar"
			}
		};
		service.series = function (){
			return [];
		};

		service.comments = function (bind) {
			return comments[bind];
		};


		return service;

	}]);