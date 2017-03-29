import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  var java = require('java');
  var javaLangSystem = java.import('java.lang.System');

  javaLangSystem.out.printlnSync('Hello World');

});
