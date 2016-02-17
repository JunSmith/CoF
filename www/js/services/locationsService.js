angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name: "Galway, Ireland",
      lat: 53.274433,
      lng: -9.049281
    },
    {
      name : "Bradford, United Kingdom",
      lat : 53.7969762,
      lng : -1.8243995
    },
    {
      name : "Busan, South Korea",
      lat : 35.1644298,
      lng : 129.0017604
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];

  return locationsObj;

}]);
