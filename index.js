/**
 * Expose page-load
 */

module.exports = pageloaded;

/**
 * Return the time to domComplete of page
 *
 * @returns {String}
 */

function pageloaded() {

  // Connectiong start
  var cstart = window.performance.timing.connectStart;

	// DOMload complete
  var domLoaded = window.performance.timing.domComplete;

  return domLoaded - cstart + " ms";
}
