var myApp = angular.module("myApp", ["ngRoute"]); //bring in angular-route into myApp

//configure the app I just created
//ngRoute is the package. $routeprovider is the service of hte package
//put this first

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home',{
            templateUrl:"assets/views/routes/home.html", //kind of like adding an event listener to hte route provider
            controller:"SomeController" //one controller per page
        }).
        when('/code', {
            templateUrl:"assets/views/routes/code.html",
            controller:"SomeController"
        }).
        when("/projects", {
            templateUrl:"assets/views/routes/projects.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: 'home'
        });
}]);