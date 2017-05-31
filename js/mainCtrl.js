angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = ['Jennifer', 'Benjamin', 'David', 'Jacob', 'Kevin', 'Carol'];
  $scope.addFriend = function() {
    $scope.friends.push($scope.addFriendField);
    $scope.addFriendField = "";
  }
});
