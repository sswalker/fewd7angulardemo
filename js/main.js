/*
Author: John McSwain
Date: 5/17/15
Purpose: Technical Assessment
App Name: mainApp
Controller Name: MainController
*/

angular.module("mainApp", [])
    .controller("MainController", ["$scope","$http",function($scope,$http) {
    
    //CONSTANTS
        var ITEM_LABEL = " items per page";
        
    //Initialize variables
        $scope.maxItemArray = [
            {"name":"10"+ITEM_LABEL,"value":10},
            {"name":"20"+ITEM_LABEL,"value":20},
            {"name":"50"+ITEM_LABEL,"value":50}
        ];

        $http.get("js/state-data.json").success(function(response){
            $scope.stateArray = response;
        });
        $http.get("js/sample-data.json").success(function(response){
            
            //run for loop on JSON data and add a "name" property containing first and last name for easy filtering
            angular.forEach(response, function(element,index){
                response[index].name = element.first_name + " " + element.last_name;
            });
            $scope.memberList = response;
        });
        $scope.custom = true;
        $scope.currentPage = 1;
        $scope.offset = 0;
        $scope.searchMember = "";
        $scope.updatePages = function(memberResults){
            if(memberResults !== undefined){
                 $scope.numberOfPages = Math.ceil(Object.keys(memberResults).length/$scope.resultLimit);
                 console.log("Number of pages: "+$scope.numberOfPages);
               // $scope.currentPage = 1;
            }
        };
        
        $scope.goBack = function(){
            /*
            if($scope.currentPage != 1){
               // $scope.currentPage--;
            }
            */
          //  console.log($scope.currentPage);
        };
        
         $scope.goForward = function(){
             /*
            if($scope.currentPage < $scope.numberOfPages){
              //  $scope.currentPage++;
                               // $scope.currentPage = 9;

            }*/
           // console.log($scope.currentPage);
        };
        $scope.resultLimit = $scope.maxItemArray[0].value;
        
        
    }]
);