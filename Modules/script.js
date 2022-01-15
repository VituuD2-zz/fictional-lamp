//MODULES

var jv = (function() {
  //Default values
  const DEFAULTS = {
    say: 'hello',
    speed: 'normal'
  }

  return {
    speak: function() {
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
      return this;               //---->  (return: this;) allows u to call the function without refer every time you call a new method.
    },
    run: function() {
      var myArguments = arguments[0] || '';
      var running = myArguments.speed || DEFAULTS.speed;
      console.log('running...' + running);
      return this;
    }
  };
})();

jv.speak({ say: 'Hey' }).run({}).speak({say: 'run Barry run'}).run({speed: 'faster'});
