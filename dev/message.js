// Javascript message

function message(target, transmitCommand) {
					
	//self awareness
	var self = this;
	this.defaultSize = { width: 100, height: 50 };
	
	//get common attributes and methods
	getTemplate(self, target, transmitCommand);
	
	this.value = "default";
	this.size = 13;
	
	this.init = function() {
		this.value = self.canvas.getAttribute("label");
		self.draw();
	}

	this.draw = function() {
		self.erase();
		self.makeRoundedBG();
		with (self.context) {
			strokeStyle = self.colors.border;
			if (self.clicked) {
				fillStyle = self.colors.accent;
			} else {
				fillStyle = self.colors.fill;
			}
			lineWidth = self.lineWidth;
			stroke();
			fill();
			
			globalAlpha = 0.2;
			var grd = self.context.createLinearGradient(0,0,0,self.height);
			grd.addColorStop(0,self.colors.fill);
			grd.addColorStop(1,self.colors.black);
			fillStyle=grd;
			fill();
			globalAlpha = 1;
			
			fillStyle = self.colors.black;
			textAlign = "left";
			font = self.size+"px Gill Sans";
		//	fillText(self.value, self.width/2, self.height/2+4);
		}
		nx.wrapText(self.context, self.value, 5, 1+self.size, self.width-6, self.size);
	}

	this.click = function(e) {
		self.draw();
		self.nxTransmit(self.value);
	}
	
	this.release = function(e) {
		self.draw();
	}
	
	this.touch = function(e) {
		self.click(e);
	}
	
	this.touchRelease = function(e) {
		self.draw();
	}
	
}