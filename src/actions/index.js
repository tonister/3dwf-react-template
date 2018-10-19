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

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  language
})

export const setFloor = (floor) => ({
  type: SET_FLOOR,
  floor
})

export const setGroup = (group) => ({
  type: SET_GROUP,
  group
})

export const setPoi = (poi) => ({
  type: SET_POI,
  poi
})

export const setZoom = (zoom) => ({
  type: SET_ZOOM,
  zoom
})

export const CREATORS = {
  setFloor: setFloor,
  setLanguage: setLanguage,
  setGroup: setGroup,
  setPoi: setPoi,
  setZoom: setZoom
};
