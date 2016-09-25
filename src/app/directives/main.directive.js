(function() {
  angular
    .module('app')
    .directive('maindir', maindir)

  function maindir() {
    var directive = {
      templateUrl: './app/templates/main.tmpl.html',
      scope: {
        recipeList: "=itemlist",
        initialcollapsed:'@collapsed'
      },
      restrict: 'E',
    }
    return directive;
  }


})()