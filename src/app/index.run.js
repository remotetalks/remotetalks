(function() {
  'use strict';

  angular
    .module('remotetalks')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
