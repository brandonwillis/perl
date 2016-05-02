angular.module('Perl.studentDashboard', ['ngMaterial', 'ngMdIcons', 'firebase'])

.controller('studentDashboard',function($mdMedia, $scope, studentFactory, $state, $firebaseAuth){
	$scope.studentName;
	$scope.studentLocation;
	$scope.studentBio;
	$scope.ref = new Firebase("https://perl-thesis.firebaseio.com/");
	$scope.authObj = $firebaseAuth($scope.ref);
	$scope.checkAuthentication = function() {
		$scope.authObj.$onAuth(function(authData) {
			if(authData) {
				$scope.uid = authData.auth.uid;
			} else {
				console.log("Error: No Token Found. Redirecting to SignIn");
				$state.go('signin');
			}
		})
	}
	$scope.checkAuthentication();
	// $scope.getStudentProfile = function() {
	// 	studentFactory.getProfile()
	// 	.then(function(data){
	// 		$scope.studentName = data.studentName;
	// 		$scope.studentLocaiton = data.studentLocaiton;
	// 		$scope.studentBio = data.studentBio;
	// 	});
	// }

	// $scope.getStudentProfile();
})
