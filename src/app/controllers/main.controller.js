(function () {
    angular
        .module('app')
        .controller('mainController', mainController)
    mainController.$inject = ['mainService']
    function mainController(mainService, $scope) {
        var vm = this;
        vm.data = [];
        vm.deleteRecipe = deleteRecipe

        init()
        function init() {
            vm.data = mainService.getData()
            console.log('main controller ' + vm.data.length)
            console.dir('main controller data ' + vm.data[0].recipeName)
        }


        function deleteRecipe(id) {
            console.log('delete ' +   id)
            mainService.deleteRecipe(id)
        }
    }
})()
