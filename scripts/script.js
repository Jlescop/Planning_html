// Script JS pour l'affichage des liens

var linksHidden = true
var baselineHidden = true


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
});

function showLinks () {
	if (linksHidden) {
		imageTwo.style.opacity = '1';
		buttonLinks.classList.add('active');
		linksHidden = false;
	}
	else {
		imageTwo.style.opacity = '0';
		buttonLinks.classList.remove('active');
		linksHidden = true;
	}
};

function showBaseline () {
	if (baselineHidden) {
		imageThree.style.opacity = '1';
		buttonBaseline.classList.add('active');
		baselineHidden = false;
	}
	else {
		imageThree.style.opacity = '0';
		buttonBaseline.classList.remove('active');
		baselineHidden = true;
	}
};

function qualityReport() {
	newWindow = window.open('quality_report.html','_blank','width=800,height=600');
};
