$(function() {
	var message = {

		message: [
			// 'Engineer by profession;', 
			// 'Writer by chance;', 
			// 'Maker and Startup Enthusiast;', 
			// 'and a avid reader',
			'So you made your way to this video, but how did you do it?', 
			'Did your motor cortex fire up the muscle fibers in your arm to move the mouse and use the keyboard to type on the screen and hit ENTER, ', 
			'And pushing the hi-tech processor in your computer to fetch this page?;', 
			'Well, Not far from now, all of this could seem out of date!',
			'Coz many industry leaders are investing big time and money into computers that can read your thoughts',
			'The ultimate goal to create super-machines that know what you want before you figure out yourself!',
			'This is the power of Artificial Intelligence and Brain Computer Interfaces!',


		],

		
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
			this.$text = $('.text');
		},

		type: function() {
			var message 	= this.message[this.counterS],
				  that 	    = this,
				  speed 	  = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.text(message);
				speed = 10;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1500 : 10;
				this.$text.text(message);
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
});