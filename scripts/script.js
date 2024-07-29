var linksHidden = true;
var baselineHidden = true;

document.addEventListener('DOMContentLoaded', function () {
	const imageTwo = document.getElementById('imageTwo');
	const imageThree = document.getElementById('imageThree');
	const buttonLinks = document.getElementById('buttonLinks');
	const buttonBaseline = document.getElementById('buttonBaseline');
	const buttonQuality = document.getElementById('buttonQuality');
	
	buttonLinks.addEventListener('mouseover', function () {
		if (linksHidden) {
			imageTwo.style.opacity = '1';
		}
	});
	
	buttonLinks.addEventListener('mouseout', function () {
		if (linksHidden) {
			imageTwo.style.opacity = '0';
		}
	});
	
	buttonBaseline.addEventListener('mouseover', function () {
		if (baselineHidden) {
			imageThree.style.opacity = '1';
		}
	});
	
	buttonBaseline.addEventListener('mouseout', function () {
		if (baselineHidden) {
			imageThree.style.opacity = '0';
		}
	});	
	
	buttonLinks.addEventListener('click', function () {
		toggleVisibility(imageTwo, buttonLinks, 'linksHidden');
	});
	
	buttonBaseline.addEventListener('click', function () {
		toggleVisibility(imageThree, buttonBaseline, 'baselineHidden');
	});
	
	buttonQuality.addEventListener('click', function () {
		window.open('quality_report.html','_blank','width=800,height=600');
	});
});

function toggleVisibility(imageElement, buttonElement, hiddenFlag) {
	if (window[hiddenFlag]) {
		imageElement.style.opacity = '1';
		buttonElement.classList.add('active');
		window[hiddenFlag] = false;
	} else {
		imageElement.style.opacity = '0';
		buttonElement.classList.remove('active');
		window[hiddenFlag] = true;
	}
}
