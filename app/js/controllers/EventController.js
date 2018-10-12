'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.snippet = '<span style="color:red"> hi there </span>';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '9/28/2018',
            time: '11:49 AM',
            location:{
                address: "blah blah",
                city: "blah blah blah",

            },
            imageUrl: '/img/angularjs-logo.png',
            sessions:[

                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0

                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: 'John Doe',
                    duration: '30 min',
                    level: 'Intro',
                    abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 0

                },
                {
                    name: "Well Behaved Controllers",
                    creatorName: 'John Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything angular does.',
                    upVoteCount: 0

                }

            ]
        }

        $scope.upVoteSession= function(session){
            session.upVoteCount++;

        };

        $scope.downVoteSession= function(session){

            session.upVoteCount--;

        };
    }


);