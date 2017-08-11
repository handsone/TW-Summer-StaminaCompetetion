"use strict";
module.exports = function (string, Avalue){
	return string.split('=>').filter((x) => x !== Avalue ).join('=>');
};
