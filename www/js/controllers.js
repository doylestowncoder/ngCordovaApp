angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaStatusbar) {

        $scope.toggleStatusbar = function() {
            $cordovaStatusbar.isVisible() ? $cordovaStatusbar.hide() : $cordovaStatusbar.show()
        }

        $scope.setStatusbarOverlayOff = function() {
            $cordovaStatusbar.overlaysWebView(false);
            $cordovaStatusbar.styleColor('purple');
        }

        $scope.setStatusbarOverlayOn = function() {
            $cordovaStatusbar.overlaysWebView(true);
        }
    })

.controller('ChatsCtrl', function($scope, $cordovaAppAvailability) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.twitterStatus = "Checking for Twitter";
    $cordovaAppAvailability.check('twitter://')
        .then(function() {
            $scope.twitterStatus = "Twitter is installed!";
        }, function () {
            $scope.twitterStatus = "Wait, you don't have twitter installed";
        });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $cordovaAppVersion) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.appVersion = "Retrieving...";

  $cordovaAppVersion.getVersionNumber().then(function (version) {
    $scope.appVersion = version;
  });

        $cordovaAppVersion.getVersionCode().then(function (code) {
            $scope.appCode = code;
        });
});
