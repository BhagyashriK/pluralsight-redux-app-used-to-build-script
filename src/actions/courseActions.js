import * as types from "./actionTypes";

export function loadCourses() {
  return { type: types.LOAD_COURSES };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function saveCourse(course, successCallback, failureCallback) {
  return { type: types.SAVE_COURSE, course, successCallback, failureCallback };
}
