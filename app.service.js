var app = angular.module("MyApp",[]);

app.controller("mainCtrl",function($scope, $http){
  $scope.submit = function(){
    $http( {
      method: "POST",
      url: "http://127.0.0.1:3000/process_post",
      data: {
        "fname": $scope.fname,
        "lname": $scope.lname
      }
    }).then(function(response){
      console.log(response);
    });
  };
});
