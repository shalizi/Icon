
var app =  angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/main');

      $stateProvider

          .state('index',{
          url: '/index' ,
          templateUrl: 'templates/index.html'

        
         
        })
      
        .state('main',{
          url: '/main' ,
          templateUrl: 'templates/main.html',
          controller: 'dashboardCtrl'
          
        })
        .state('sellmycar',{
          url: '/sellmycar' ,
          templateUrl: 'templates/sellmycar.html',
          controller: 'sellMyCarCtrl'
          
        })
        .state('loan',{
          url: '/loan',
          templateUrl: 'templates/loan.html',
          controller: 'loanCtrl'

        })
        .state('about',{
          url: '/about' ,
          templateUrl: 'templates/about.html'
          
        })
        .state('contact',{
          url: '/contact' ,
          templateUrl: 'templates/contact.html',
          controller: 'mainCtrl'
          
        })
        .state('privacy',{
          url: '/privacy' ,
          templateUrl: 'templates/privacy.html'
          
        })
        .state('dashboard',{
          url: '/dashboard' ,
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
          
        })
        .state('search',{
          url: '/search' ,
          templateUrl: 'section/search.html',
          controller: 'searchCtrl'
          
        })
        .state('testing3',{
          url: '/testing3' ,
          templateUrl: 'templates/testing3.html'
          
        });
              
          
        
    }]);