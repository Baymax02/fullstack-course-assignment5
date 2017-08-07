(function() {
  'use strict';

  angular.module('public')
  .controller('MenuSignUpController', MenuSignUpController);

  MenuSignUpController.$inject = ['MenuService'];
  function MenuSignUpController(MenuService){
    var $ctrl = this;

    $ctrl.invalidmenu = false;
    $ctrl.saveuserinfo = false;

    $ctrl.submit = function()
    {
      MenuService.validMenu($ctrl.user.favoritemenu)
      .then(function(data)
      {
        MenuService.saveUserInfo($ctrl.user);
        $ctrl.invalidmenu = false;
        $ctrl.saveuserinfo = true;
      }).catch(function(err){
        $ctrl.invalidmenu = true;
      });
    }
  };

})();
