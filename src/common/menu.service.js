(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var regUser = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.validMenu= function(menuShortName)
  {
    var result = "";

    result =  $http.get(ApiPath + '/menu_items/' + menuShortName + '.json').then(function(response){
        return response.data.short_name;
    });

    return result;
  }

  service.saveUserInfo = function (user)
  {
    regUser = {
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      favoritemenu: user.favoritemenu,
      registered: true
    }
  };

  service.getUserInfo = function (user)
  {
     if (regUser.registered)
     {
       return regUser;
     }
     else {
       return;
     }
  };

}



})();
