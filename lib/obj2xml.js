(function() {
  'use strict';
  module.exports = function (rootName, obj, options) {
    return obj2xml(rootName, obj);
  }

  const obj2xml = function(rootName, obj) {
    let xml = [];
    let child = [];
    xml.push(`<${rootName}`)
    if( Object.prototype.toString.call( obj ) === '[object Array]' ) {
      let childName = rootName;
      if (rootName.match(/s$/)) {
        childName = rootName.replace(/s$/, '');
      } else {
        xml.push('s');
      }
      xml.push(` count="${obj.length}">`); // if is array, add 's'
      for(let i = 0; i < obj.length; i++) {
        xml.push(obj2xml(childName, obj[i]));
      }
    } else {
      for(const key in obj) {
        if( Object.prototype.toString.call( obj[key] ) === '[object Object]'
          || Object.prototype.toString.call( obj[key] ) === '[object Array]' ) {
          child.push(obj2xml(key, obj[key]));
        } else if (Object.prototype.toString.call( obj[key] ) !== '[object Function]') {
          xml.push(` ${key}="${obj[key]}"`);
        }
      }
      xml.push('>');
    }

    xml.push(child);
    xml.push(`</${rootName}>`);
    return xml.join('');
  }
})();
