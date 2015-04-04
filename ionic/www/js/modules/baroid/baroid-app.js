angular.module("baroidApp", ["ionic", "ui.router", "ngCordova"])

    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $state.go("baroid");
    })

    .config(function ($stateProvider, $urlRouterProvider, $compileProvider) {
        $stateProvider
            .state("baroid", {
                url:"/",
                templateUrl:"baroid-home.html",
                controller:"BaroidOptionsController"
            })
            .state("pullback", {
                url:"pullback",
                templateUrl:"html/baroid/state/hdd-pullback-state.html",
                controller:"BaroidPullbackController"
            });

        $urlRouterProvider.otherwise("/");

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|blob|chrome-extension|filesystem:chrome-extension):/);
    });