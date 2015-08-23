define([
  'jquery',
  'underscore',
  'backbone',
  'models/jenkins',
  'md5'
], function($, _, Backbone, Jenkins, MD5, Pics){
				
	var Gravatar = {};
	
	Gravatar.hash = function(email) {
		return MD5.hash($.trim(email.toLowerCase()));
	};
	
	Gravatar.url = function(email, size) {
        //get from gravatar
		url += this.hash(email);
		if (size) {
			url += '?s=';
			url += size;
		}
		return url;
	};

	return Gravatar;

});