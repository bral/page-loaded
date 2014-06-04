/**
 * Expose page-load
 */

module.exports = pageloaded;

/**
 * Return the time in milliseconds to domComplete of page
 *
 * @returns {String}
 */

(function call() {
  var dc = window.performance.timing.domComplete;
  var cs = window.performance.timing.connectStart;
  var time = dc - cs;
  if(dc) {
    console.log('DOM Complete: Load Time', time + "ms");
    return time;
  } else {
    setTimeout(function(){
      call();
    }, 1);
  }
})();
