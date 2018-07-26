/**
 * action types
 */

export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_FLOOR = "SET_FLOOR";
export const SET_GROUP = "SET_GROUP";
export const SET_POI = "SET_POI";
export const SET_ZOOM = "SET_ZOOM";

/**
 * other constants
 */

export const ACTIONS = {
  SET_FLOOR: SET_FLOOR,
  SET_LANGUAGE: SET_LANGUAGE,
  SET_GROUP: SET_GROUP,
  SET_POI: SET_POI,
  SET_ZOOM: SET_ZOOM
};

/**
 * action creators
 */

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  };
}
export function setFloor(floor) {
  return {
    type: SET_FLOOR,
    floor
  };
}

export function setGroup(group) {
  return {
    type: SET_GROUP,
    group
  };
}

export function setPoi(poi) {
  return {
    type: SET_POI,
    poi
  };
}

export function setZoom(zoom) {
  return {
    type: SET_ZOOM,
    zoom
  };
}

export const CREATORS = {
  setFloor: setFloor,
  setLanguage: setLanguage,
  setGroup: setGroup,
  setPoi: setPoi,
  setZoom: setZoom
};
