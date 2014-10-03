'use strict';
angular.module("DemoApp", ["bootstrap-tagsinput"])
    .controller('demoController', ['$scope', function ($scope) {
        $scope.allTags = [
        ];
        $scope.tags = [];
        $scope.test = "test message";
        for (var i = 0; i < 20; i++) {
            $scope.allTags.push({
                text: "a" + i,
                value: i
            });
        }
        $scope.tags.push($scope.allTags[0]);
        $scope.loadTags = function (query) {
            return $scope.allTags;
        };
        $scope.update = function () {
            $scope.$apply();
        };
    }]);

