var app= angular.module("MyApp",["ngRoute", "ngAnimate"] );
app.config(function($routeProvider){
    $routeProvider
    .when("/content", {
        templateUrl : "trangChu.html",
    })
    .when("/gioiThieu", {
        templateUrl : "gioiThieu.html",
    })
    .when("/LienHe", {
        templateUrl : "LienHe.html",
    })
    .when("/SanPham", {
        templateUrl : "SanPham.html",
    })
    .otherwise({
        redirectTo: '/content'
    })
});
