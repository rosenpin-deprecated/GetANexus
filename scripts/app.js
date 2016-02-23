/**
 * Created by tomer on 12/31/15.
 */
/**
 * Created by tomer on 12/24/15.
 */
var app = angular.module('Landing', ['ngMaterial']).config(function ($mdThemingProvider) {

});
app.controller('MainController', function ($scope, $rootScope, $http, $mdMedia) {

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
        ],
        [
            "I want my battery to last all day long",
            "I want an average sized battery",
            "I don't care about my battery"
        ],
        [
            "I take a lot of pictures and videos",
            "I take pictures and videos now and then",
            "I don't care about the camera on my phone"
        ]
    ];
    $scope.current_answers = $scope.allAnswers[0];
    $scope.current = 0;
    $scope.changeCurrent = function () {
        $scope.current++;
        if($scope.current>=$scope.allAnswers.length){
            open("GetANexus.html")
        }
        else {
            $scope.current_answers = $scope.current_answers = $scope.allAnswers[$scope.current];
        }
    };
    $scope.url = "https://www.google.com/nexus/";
    $scope.imgURL = "";
});
