function ActionsCtrl($scope, $http) {
  $http.get('actions/actions.json').success(function(data) {
    $scope.actions = data;
    shuffleArray($scope.actions);
  });
}
//$('.city-list').jscroll();
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
