function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");

    $stateProvider
  .state('contacts', {
    templateUrl: 'contacts.html',
    controller: function($scope){
      $scope.contacts = [{ name: 'Alice' }, { name: 'Bob' }];
    }
  })
  .state('contacts.list', {
    templateUrl: 'contacts.list.html'
  });




    $stateProvider

        // Dashboard - Main page
        .state('app', {
            templateUrl: "app/views/template.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })

        // Dashboard - Main page
        .state('app.dashboard', {
            url: "/dashboard",
            templateUrl: "app/views/page/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })

        // Analytics
        .state('analytics', {
            url: "/analytics",
            templateUrl: "app/views/page/analytics.html",
            data: {
                pageTitle: 'Analytics'
            }
        })

        // Widgets
        .state('widgets', {
            url: "/widgets",
            templateUrl: "app/views/page/widgets.html",
            data: {
                pageTitle: 'Widgets'
            }
        })

        // Interface
        .state('interface', {
            abstract: true,
            url: "/interface",
            templateUrl: "app/views/page/common/content.html",
            data: {
                pageTitle: 'Interface'
            }
        })
        .state('interface.panels', {
            url: "/panels",
            templateUrl: "app/views/page/interface/panels.html",
            data: {
                pageTitle: 'Panels',
                pageDesc: 'Two great icon libraries. Pe-icon-7-stroke and Font Awesome'
            }
        })
}

adminApp.config(configState)
    // .run(function($rootScope, $state, editableOptions) {
    //     $rootScope.$state = $state;
    //     editableOptions.theme = 'bs3';
    // });