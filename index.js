/**
 * calculate the angle between two points
 * @param  {Number} x1
 * @param  {Number} y1
 * @param  {Number} x2
 * @param  {Number} y2
 *
 * @return {Number}    angle in degree
 */

module.exports = function(x1, y1, x2, y2) {
  var theta = Math.atan2(-(y1 - y2), (x1 - x2));
  if (theta < 0) theta += 2 * Math.PI;

  var degrees = Math.floor(theta * (180 / Math.PI) - 180);
  if (degrees < 0 && degrees > -180) degrees = 360 - Math.abs(degrees);

  return Math.abs(degrees);
};