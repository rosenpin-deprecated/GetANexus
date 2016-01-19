/**
 * Created by tomer on 12/31/15.
 */
/**
 * Created by tomer on 12/24/15.
 */
var app = angular.module('Landing', ['ngMaterial']).config(function ($mdThemingProvider) {

});
app.controller('MainController', function ($scope, $rootScope, $http, $mdMedia) {
    $scope.current_answers = ["I love gaming on my phone", "I love watching media on my phone", "I love texting on my phone", "I love to read on my phone"]
    $scope.allAnswers = [
        [
            "I love gaming on my phone",
            "I love watching media on my phone",
            "I love texting on my phone",
            "I love to read on my phone"],
        [
            "I want a big screen",
            "I want a small screen",
            "I want an average sized screen"
        ]
    ];
    $scope.current = 0;
    $scope.changeCurrent = function () {
        $scope.current++;
        $scope.current_answers = $scope.current_answers = $scope.allAnswers[$scope.current];
    }
});
