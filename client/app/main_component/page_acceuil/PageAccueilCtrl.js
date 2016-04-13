angular.module('teleportation')
    .controller('PageAccueilCtrl',['$http',function MyAccountCtrl ($http) {
        console.log("PageAccueilCtrl");
        var vm = this;
        vm.pageClass = "page-acceuil";

        $("#accueil").vegas({
            slides: [
                { src: 'client/app/main_component/page_acceuil/img/slide1.jpg',transition:'flash2'},
                { src: 'client/app/main_component/page_acceuil/img/slide2.jpg',transition:'swirlRight2'},
                { src: 'client/app/main_component/page_acceuil/img/slide3.jpg',transition:'flash'}
            ],
            delay: 6000,
            timer: false,
            shuffle: true,
            transitionDuration: 15000
        });
    }]);