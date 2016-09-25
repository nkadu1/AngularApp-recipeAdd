(function() {
  angular
    .module('app')
    .directive('secdir', secdir)

  function secdir() {
    var directive = {
      controller: mainDirController,
      controllerAs: 'vmd',
      templateUrl: './app/templates/addRecipe.tmpl.html',
      bindToController: true,
      scope: {
        show: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directiv
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
      },
    }

    function mainDirController(mainService) {
      vmd = this;
      vmd.data = []
      vmd.putRecipe = putRecipe;
      
      function putRecipe(obj, form) {
        vmd.newRecipe = obj;
        console.log('In dir contr ' + vmd.newRecipe.recipeName)
        mainService.putRecipe(vmd.newRecipe);
        vmd.data = mainService.getData();
        clear(form);
        console.log('In dir vmd data lengtgh ' + vmd.data.length)
      }

      function closeModal() {
         vmd.modalShown = false
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