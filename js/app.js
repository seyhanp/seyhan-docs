var seyhanDocApp = angular.module('seyhanDocApp', ['ngRoute'])

seyhanDocApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl : 'main.html'})
        .when('/stok', {templateUrl : 'stok.html'})
        .when('/cari', {templateUrl : 'cari.html'})
        .when('/kasa', {templateUrl : 'kasa.html'})
        .when('/banka', {templateUrl : 'banka.html'})
        .when('/cek_senet', {templateUrl : 'cek_senet.html'})
        .when('/siparis', {templateUrl : 'siparis.html'})
        .when('/irsaliye', {templateUrl : 'irsaliye.html'})
        .when('/fatura', {templateUrl : 'fatura.html'})
        .when('/satis', {templateUrl : 'satis.html'})
        .when('/genel', {templateUrl : 'genel.html'})
        .when('/admin', {templateUrl : 'admin.html'})

        .when('/printing/printing', {templateUrl : 'printing/printing.html'})
        .when('/printing/pservice', {templateUrl : 'printing/pservice.html'})
        .when('/printing/sample01', {templateUrl : 'printing/sample01.html'})
        .when('/printing/sample02', {templateUrl : 'printing/sample02.html'})
        .when('/printing/sample03', {templateUrl : 'printing/sample03.html'})
        .when('/printing/sample04', {templateUrl : 'printing/sample04.html'})
        .when('/printing/sample05', {templateUrl : 'printing/sample05.html'})
        .when('/printing/sample06', {templateUrl : 'printing/sample06.html'})

        .when('/others/install', {templateUrl : 'others/install.html'})
        .when('/others/profiles', {templateUrl : 'others/profiles.html'})
        .when('/others/database', {templateUrl : 'others/database.html'})
        .when('/others/stock-tabs', {templateUrl : 'others/stock-tabs.html'})
        .when('/others/report-forms', {templateUrl : 'others/report-forms.html'})
        .when('/others/list-forms', {templateUrl : 'others/list-forms.html'})
        .when('/others/special-fields', {templateUrl : 'others/special-fields.html'})
        .when('/others/informations', {templateUrl : 'others/informations.html'})

        .when('/devzone/install', {templateUrl : 'devzone/install.html'})

        .otherwise({ redirectTo: '/' });
});
