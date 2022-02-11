$.fn.parallaxe = function(vitesse) {
	const element = $(this);
	const hViewport = $(window).height();
	const hElt = element.height();
	function actualiser() {
		const posY = $(window).scrollTop();
		const y = element.offset().top;
		if(y > posY + hViewport || posY > y + hElt) {
			
		} else {
			element.css({
            backgroundPositionY: `${Math.round((y - posY) * vitesse)}px`,
         })
		}
	}
	actualiser();

   $(window).scroll(actualiser);
}