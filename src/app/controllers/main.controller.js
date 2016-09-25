(function () {
    angular
        .module('app')
        .controller('mainController', mainController)
    mainController.$inject = ['mainService']
    function mainController(mainService, $scope) {
        var vm = this;
        vm.data = [];
        vm.openModal = openModal;
        vm.closeModal = closeModal;
        init()
        function init() {
            vm.data = mainService.getData()
            console.log('main controller ' + vm.data.length)
            console.dir('main controller data ' + vm.data[0].recipeName)
        }
        function openModal() {
            vm.modalShown = true
        }
        function closeModal() {
            vm.modalShown = false
        }
    }
})()