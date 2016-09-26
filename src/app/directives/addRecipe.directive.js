(function () {
    angular
        .module('app')
        .directive('modal', modal)

    function modal() {
        console.log('Inside directive')
        var directive = {
            controller: addRecipeController,
            controllerAs: 'vmd',
            templateUrl: './app/templates/addRecipe.tmpl.html',
            scope: {
                modalShown: '=modalShown',
                options: '=',
                onClose: '&',
                handler: '=lolo',
                title: '=modalTitle',
                header: '=modalHeader',
                body: '=modalBody',
                footer: '=modalFooter',
                callbackbuttonleft: '&ngClickLeftButton',
                callbackbuttonright: '&ngClickRightButton',
            },
            replace: false,
            transclude: true,
        }

        function addRecipeController(mainService, $scope) {
            $scope.handler = 'pop';
            console.log('Inside directve controller')
            vmd = this;
            vmd.data = []
            vmd.putRecipe = putRecipe;
            vmd.modalClosed = modalClosed
           // vmd.modalShown = true
            function putRecipe(obj, form) {
                vmd.newRecipe = obj;
                console.log('In dir contr ' + vmd.newRecipe.recipeName)
                mainService.putRecipe(vmd.newRecipe);
                vmd.data = mainService.getData();
                clear(form);
                console.log('In dir vmd data lengtgh ' + vmd.data.length)
            }

            function modalClosed() {
                element.modal('hide');
                console.log('In modal cloased ============ ' )
            }

            function clear() {
                vmd.newRecipe = {};
                vmd.recipeForm.$setPristine();
                vmd.recipeForm.$setUntouched();
            }
        }

        return directive;
    }


})()