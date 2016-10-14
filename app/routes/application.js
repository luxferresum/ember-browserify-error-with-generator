import Ember from 'ember';
import co from 'npm:co';

export default Ember.Route.extend({
  model() {
    // this code would actually work:
    // return co();

    // but the generator function prevents ember-browserify from including the dependency.
    return co(function * () {

    });
  }
});
