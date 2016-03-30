app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
    series: "Sherlock", 
    series_img: "img/sherlock.jpg", 
    genre: "Crime drama", 
    season: 3, 
    episode: "The Empty Hearse", 
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00) 
  };
  
  $scope.second = {
    series: "SherlockII", 
    series_img: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg", 
    genre: "Crime drama", 
    season: 4, 
    episode: "The Trump Fight", 
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00) 
  };
}]);