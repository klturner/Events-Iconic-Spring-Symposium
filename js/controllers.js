angular.module('ionicApp.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.leftButtons = [{
    type: 'button-icon button-clear ion-navicon',
    tap: function(e) {
      $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
    }
  }];
  
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
})

.controller('AgendaCtrl', function($scope) {
	
  $scope.dayOne = [
		{ id: 0, day:'one', time: '9:00 a.m', description: 'Onsite registration and check in (closes at 4:00 p.m.)' },
		{ id: 1, day:'one', time: 'Noon – 5:00 p.m.', description: 'Shotgun scramble and spa treatments' },
		{ id: 2, day:'one', time: '6:00 P.M. – 7:30 P.M.', description: 'Cocktail reception and exhibit opening' },
		{ id: 3, day:'one', time: '7:30 p.m. – 9:30 p.m.', description: 'Dinner' }     
    ];
    
  $scope.dayTwo = [
		{ id: 0, day:'two', time: '7:45 a.m. – 8:00 a.m.', description: 'Opening remarks' },
		{ id: 1, day:'two', time: '8:00 a.m. – 9:00 a.m.', description: 'Keynote Speaker: Tucker Carlson, veteran journalist and political commentator will review the political climate and the upcoming mid-term elections.' },
		{ id: 2, day:'two', time: '9:00 a.m. – 9:15 a.m..', description: 'Break' },
		{ id: 3, day:'two', time: '9:15 a.m. – 10:15 a.m.', description: '“Driver recruiting best practices”' }, 
		{ id: 3, day:'two', time: '10:30 a.m. – 11:15 a.m.', description: 'Key Supplier Business Meetings 1' }, 
		{ id: 3, day:'two', time: '11:30 a.m. – 12:15 p.m.', description: 'Key Supplier Business Meetings 2' }, 
		{ id: 3, day:'two', time: '12:15 a.m. – 1:30 p.m.', description: 'Luncheon Speaker TCA incoming chairman Shepard Dunn' }, 
		{ id: 3, day:'two', time: '1:45 p.m. – 2:30 p.m.', description: 'Key Supplier Business Meetings 3' }, 
		{ id: 3, day:'two', time: '2:45 p.m. – 3:45 p.m.', description: 'Update from Washington Invited: Anne Ferro, FMCSA Administrator' },   
		{ id: 3, day:'two', time: '3:45 p.m. – 4:00 p.m..', description: 'Break' },     
		{ id: 3, day:'two', time: '4:00 p.m. – 5:00 p.m.', description: 'Breakout Workshops Brent Nussbaum, CEO, Nussbaum Tranportation will discuss his companies move to automated manual transmissions. Upgrading to ELDs' },     
		{ id: 3, day:'two', time: '6:30 p.m. – 8:30 p.m.', description: 'Reception & dinner (Patio)' }  
    ];
    
  $scope.dayThree = [
		{ id: 0, day:'two', time: '9:00 a.m.', description: 'Onsite registration and check in (closes at 4:00 p.m.)' },
		{ id: 1, day:'two', time: 'Noon – 5:00 p.m.', description: 'Shotgun scramble and spa treatments' },
		{ id: 2, day:'two', time: '6:00 p.m. – 7:30 p.m.', description: 'Cocktail reception and exhibit opening' },
		{ id: 3, day:'two', time: '7:30 p.m. – 9:30 p.m.', description: 'Dinner' }  
    ]; 
  
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});

