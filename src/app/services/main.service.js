(function(){
  
  angular
  .module('app')
  .service('mainService',mainService)
  
  function mainService(){
    var vs  = this;
    vs.data =[{recipeName:'Myrecipe',ingredients:'My recipie Ingr'},{ recipeName:'sec recipe', ingredients:'sec recipie Ingr'}]
    vs.getData =  getData;
    vs.putRecipe  = putRecipe;
    vs.deleteRecipe = deleteRecipe

    function getData(){
        
        return vs.data;      
    }
    
    function putRecipe(newRecipe){
      vs.data.push(newRecipe);
      console.log('length '  + vs.data.length)
      console.log('content  '  + vs.data[0].recipeName)

    }
    function deleteRecipe(id){
      vs.data.splice(id, 1)
    }
  }
})()