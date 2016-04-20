import store from './store'
import refresh from './refresh'
import _ from 'lodash'
import geolib from 'geolib'
import $ from 'jquery'
import { NEARBY_METERS } from './constants'

//
// Action functions
//

// Action to load fiber data asynchrnously
export function loadDataAsync(){

  $.ajax('/data/boulder.json').done(function(json) {
    store.geometries = json

    let fibers = {}

    store.fibers = _.map(json, (d) => {


      // TODO: implement the correct logic to compute the center of the geometry
      // hint: use geolib.getCenter()

      let center = geolib.getCenter(d.coordinates)

      return {
        geometry: d,
        center: center
      }
    })

    refresh()
  })
}

export function loadRiverDataAsync(){

  $.ajax('/data/rivers.json').done(function(json) {
    store.geometries = json

    let rivers = {}

    store.rivers = _.map(json, (d) => {


      // TODO: implement the correct logic to compute the center of the geometry
      // hint: use geolib.getCenter()

      let center = geolib.getCenter(d.coordinates)

      return {
        geometry: d,
        center: center
      }
    })

    refresh()
  })
}

// Action to set a position selected by the user
export function setSelectedPosition(latlng) {
  store.selectedPosition = latlng

  store.selectedPosition.riverDist = 1000000000000000

  _.forEach(store.fibers, forEachFiberSetIsSelected)

  _.forEach(store.rivers, forEachRiverFindMin)

  _.forEach(store.fibers, forEachFiberSetCost)

  refresh()
}

export function setSelectedPositionManual() {
  var latitude = $("#latitude").val()
  var longitude = $("#longitude").val()
  var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)}

  store.selectedPosition = latlng

  store.selectedPosition.riverDist = 1000000000000000

  _.forEach(store.fibers, forEachFiberSetIsSelected)

  _.forEach(store.rivers, forEachRiverFindMin)

  _.forEach(store.fibers, forEachFiberSetCost)

  refresh()
}

//
// private helper function
//

// helper to set each fiber's 'isSelected' flag based on whether this fiber is
// nearby with respect to the position selected by the user
function forEachFiberSetIsSelected(fiber){

   fiber.distance = geolib.getDistance(store.selectedPosition, fiber.center)
    if (fiber.distance <= NEARBY_METERS) {
        fiber.isSelected = true;
    } else {
        fiber.isSelected = false;
    };

}

function forEachRiverFindMin(river){
  river.dist = geolib.getDistance(store.selectedPosition, river.center)
  if (river.dist < store.selectedPosition.riverDist) {
    store.selectedPosition.riverDist = river.dist
  }
}

// helper to set the cost of connecting this fiber to the selected position
function forEachFiberSetCost(fiber){

  // TODO: implement the logic to calcualte the cost of connecting from the selected
  // position to this fiber, and the distance between them.
  fiber.distance = geolib.getDistance(store.selectedPosition, fiber.center)
  fiber.cost = fiber.distance*5+(100000/store.selectedPosition.riverDist)
}
