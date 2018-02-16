var app=angular.module('app',[]);
app.controller('ctrl',ctrl);
ctrl.$inject=['$scope','my_service'];
function ctrl($scope,my_service) {
    $scope.oninit = function () {
                        $scope.getdataNew();
                    };
		
	
	
    $scope.getdataNew=function () {
        my_service.getData().then(function (response) {
           $scope.newdata=response;
        });
    };
		$scope.oninit();
};
app.service('my_service',my_service);
my_service.$inject=['$http'];
function my_service($http) {
    var obj=this;

    obj.getData=function () {
        return $http.
            get('https://newsapi.org/v2/top-headlines?country=in&apiKey=6ad73b0d0ed64dc699de96cf0a9adf00')
                .then(function (response) {
                return response.data.articles;
        });
    }

    return obj;
}