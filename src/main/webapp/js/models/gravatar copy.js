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
		/*var url = 'http://www.gravatar.com/avatar/';

        //console.log(Jenkins.config.toJSON());
        //Jenkins.config.set("usersName", email.slice(0, email.indexOf("@")));
        //Jenkins.config.save();
        //Jenkins.config.fetch();
        var image = "";
        //var fr = new FileReader();
        var baseURL = Jenkins.config.get("rootUrl") +"/plugin/ezwall/js/pics/";
        var name1 = email.slice(0, email.indexOf("@")) + ".jpg";
        var name2 = email.slice(0, email.indexOf("@")) + ".png";

        fr.onloadend = function(evt) {

        if(evt.target.result == null) {
           // If you receive a null value the file doesn't exists
           //console.log("no image")

        } else {
            // Otherwise the file exists

            image = fr.result;
        }         
        };

        fr.readAsDataURL(baseURL + name1);
        if(image.length > 0) {
            //get locally
            fr.readAsDataURL(baseURL + name2);
        }

        console.log(image);



        if(image.length > 0) {
            //get locally
            url = image;
        }
        else {*/
        	//get from gravatar
		url += this.hash(email);
		if (size) {
			url += '?s=';
			url += size;
		}
	    //}
		return url;
	};

	return Gravatar;

});