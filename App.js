(function() {

  'use strict';

  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope) {

    $scope.name="Akshay";
    $scope.totalvalue = 0;

      $scope.displayTotal = function() {

        var totalNameValue = calculateStringValue($scope.name);
        $scope.totalvalue = totalNameValue;

      }

    function calculateStringValue(string){

        var totalstringval = 0;

        for(var i=0; i < string.length; i++){

            totalstringval += string.charCodeAt(i);
        }

        return totalstringval;
    }

  });

})();
