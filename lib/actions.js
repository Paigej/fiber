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
  console.log("fibers1", store.fibers)
  console.log("rivers1", store.rivers)

  if (store.selectedPosition2) {
    store.selectedPosition.selectedDist = geolib.getDistance(store.selectedPosition2, store.selectedPosition)
    store.selectedPosition.selectedCost = store.selectedPosition.selectedDist*4+(100000/store.selectedPosition.riverDist)
  }
  console.log("selectedPosition1", store.selectedPosition)

  refresh()
}

export function setSelectedPositionManual2() {
  var latitude = $("#latitude2").val()
  var longitude = $("#longitude2").val()
  var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)}

  store.selectedPosition2 = latlng

  store.selectedPosition2.riverDist = 1000000000000000

  _.forEach(store.fibers, forEachFiberSetIsSelected2)

  _.forEach(store.rivers, forEachRiverFindMin2)

  _.forEach(store.fibers, forEachFiberSetCost2)
  console.log("fibers2", store.fibers)
  console.log("rivers2", store.rivers)

  if (store.selectedPosition) {
    store.selectedPosition2.selectedDist = geolib.getDistance(store.selectedPosition2, store.selectedPosition)
    store.selectedPosition2.selectedCost = store.selectedPosition2.selectedDist*4+(100000/store.selectedPosition2.riverDist)
  }
  console.log("selectedPosition2", store.selectedPosition2)

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



// helper to set each fiber's 'isSelected' flag based on whether this fiber is
// nearby with respect to the position selected by the user
function forEachFiberSetIsSelected2(fiber){

   fiber.distance = geolib.getDistance(store.selectedPosition2, fiber.center)
    if (fiber.distance <= NEARBY_METERS) {
        fiber.isSelected2 = true;
    } else {
        fiber.isSelected2 = false;
    };

}

function forEachRiverFindMin2(river){
  river.dist = geolib.getDistance(store.selectedPosition2, river.center)
  if (river.dist < store.selectedPosition2.riverDist) {
    store.selectedPosition2.riverDist = river.dist
  }
}

// helper to set the cost of connecting this fiber to the selected position
function forEachFiberSetCost2(fiber){

  // TODO: implement the logic to calcualte the cost of connecting from the selected
  // position to this fiber, and the distance between them.

  fiber.distance2 = geolib.getDistance(store.selectedPosition2, fiber.center)
  fiber.cost2 = fiber.distance*5+(100000/store.selectedPosition2.riverDist)
}
