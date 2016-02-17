angular.module('starter').factory('LocationService', ['$q', LocationService]);

function LocationService($q) {
  var db;
  var locations;

  return {
    initDB: initDB,
    // getAllLocations: getAllLocations,
    addLocation: addLocation,
    deleteLocation: deleteLocation
  };

  function initDB() {
    db = new PouchDB('locations', {adapter: 'websql'});
  }

  function addLocation(location) {
    return $q.when(db.post(location));
  }

  function deleteLocation(location) {
    return $q.when(db.remove(location));
  }

  function onDatabaseChange(change) {
    var index = findIndex(locations, change.id);
    var location = locations[index];

    if (change.deleted) {
        if (locations) {
            locations.splice(index, 1); // delete
        }
    }
    else {
      if (locations && locations._id === change.id) {
        locations[index] = change.doc; // update
      }
      else {
        locations.splice(index, 0, change.doc) // insert
      }
    }
  }

  function findIndex(array, id) {
    var low = 0, high = array.length, mid;
    while (low < high) {
      mid = (low + high) >>> 1;
      array[mid]._id < id ? low = mid + 1 : high = mid
    }
    return low;
  }
}
