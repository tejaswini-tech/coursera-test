(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope','$filter','$injector'];

function LunchCheckController($scope,$injector,$filter){

$scope.check=function(){
$scope.words=$scope.inputtext.split(',');

  if($scope.inputtext=='' || $scope.inputtext==undefined)
  {
    $scope.message="Please enter data first";
  }
  else if($scope.words.length>3)
  {
    $scope.message="Too much!";
  }
  else if($scope.words.length<=3) {
      $scope.message="Enjoy!";
  }
};
}

})();
