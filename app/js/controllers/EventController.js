'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData){
        $scope.snippet = '<span style="color:red"> hi there </span>';
        $scope.sortOrder = "name";
        $scope.event = eventData.getEvent(function(){
            $scope.event = event;
        });

        $scope.upVoteSession= function(session){
            session.upVoteCount++;

        };

        $scope.downVoteSession= function(session){

            session.upVoteCount--;

        };
    }


);
