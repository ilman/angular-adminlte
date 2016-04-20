var adminApp = angular.module('adminApp', ['ui.router']);

adminApp.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
})
.directive('sidebarTree', function () {
    return {
    	restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            
        	$.AdminLTE.tree('.'+attrs.class);

        }
    };
});