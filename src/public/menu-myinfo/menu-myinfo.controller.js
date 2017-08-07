(function(){
  'use strict';
   angular.module('public')
   .controller('MenuMyInfoController',MenuMyInfoController);

   MenuMyInfoController.$inject = ['MenuService']
   function MenuMyInfoController(MenuService)
   {
     var $ctrl = this;
     var user = MenuService.getUserInfo();

     if(user)
     {
       $ctrl.isRegUser = true;
       $ctrl.user = user;
     }
     else {
       $ctrl.isRegUser = false;
     }
   }
})();
