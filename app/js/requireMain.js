requirejs.config({
  baseUrl: 'app/js',
  paths: {
    'flight': '/components/flight',
    'mustache': '/components/mustache'
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/tools/debug/debug'
  ],

  function(compose, registry, advice, withLogging, debug) {
    debug.enable(true);
    compose.mixin(registry, [advice.withAdvice, withLogging]);
    require(['boot/page'], function(initialize) {
      initialize();
    });
  }
);