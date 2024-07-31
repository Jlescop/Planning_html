var linksHidden = true;
var baselineHidden = true;

document.addEventListener('DOMContentLoaded', () => {	
	
	
    const imageTwo = document.getElementById('imageTwo');
    const imageThree = document.getElementById('imageThree');
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const dd = document.getElementById('dd');
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');
    const p1 = document.getElementById('p1');
    const brass = document.getElementById('brass');
    const silver = document.getElementById('silver');
    const gold = document.getElementById('gold');
    
    const counter = [
        {id: 'b1', hovers: 0},
        {id: 'b2', hovers: 0},
        {id: 'b3', hovers: 0},
	{id: 'dd', hovers: 0},
        {id: 's1', hovers: 0},
	{id: 's2', hovers: 0},
        {id: 1, hovers: 0},
        {id: 2, hovers: 0},
        {id: 3, hovers: 0},
        {id: 4, hovers: 0},
        {id: 5, hovers: 0},
        {id: 6, hovers: 0},
        {id: 7, hovers: 0},
        {id: 8, hovers: 0},
        {id: 9, hovers: 0},
        {id: 10, hovers: 0},
        {id: 11, hovers: 0},
        {id: 12, hovers: 0},
        {id: 13, hovers: 0}
    ];

    b1.addEventListener('mouseover', () => {
        if (linksHidden) {
            imageTwo.style.opacity = '1';
        }
    });

    b1.addEventListener('mouseout', () => {
        if (linksHidden) {
            imageTwo.style.opacity = '0';
        }
    });

    b2.addEventListener('mouseover', () => {
        if (baselineHidden) {
            imageThree.style.opacity = '1';
        }
    });

    b2.addEventListener('mouseout', () => {
        if (baselineHidden) {
            imageThree.style.opacity = '0';
        }
    });

    b1.addEventListener('click', () => {
        toggleVisibility(imageTwo, b1, 'linksHidden');
    });

    b2.addEventListener('click', () => {
        if (baselineHidden) {
            s1.style.visibility = 'visible';
        } else {
            s1.style.visibility = 'hidden';
        }
        toggleVisibility(imageThree, b2, 'baselineHidden');
    });

    b3.addEventListener('click', () => {
        window.open('quality_report.html', '_blank', 'width=600, height=900, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no');
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

    function updateHoverCount(event) {
        counter.forEach((ele) => {
            if (ele.id == event.target.id) {
                ele.hovers = 1;
                updateProgressBar();
            }
        });
    }

    counter.forEach((ele) => {
        const interaction = document.getElementById(ele.id);
        interaction.addEventListener('mouseenter', updateHoverCount);
    });

    function sumHovers() {
        return counter.reduce((sum, item) => sum + item.hovers, 0);
    }

    function updateProgressBar() {
        const totalHovers = sumHovers();
        p1.value = totalHovers;
		console.log(totalHovers);
        switch (true) {
            case (totalHovers == 19):
                gold.style.opacity = '1';
                p1.style.setProperty('--progress-bar-color', '#FFD700');
				gold.classList.add('zoom-effect-3');
                console.log('Gold');
                break;
            case (totalHovers >= 14):
                silver.style.opacity = '1';
                p1.style.setProperty('--progress-bar-color', '#C0C0C0');
				silver.classList.add('zoom-effect-2');
                console.log('Silver');
                break;
            case (totalHovers >= 7):
                brass.style.opacity = '1';
                p1.style.setProperty('--progress-bar-color', '#CD7F32');
				brass.classList.add('zoom-effect-1');
                console.log('Brass');
                break;
            default:
                p1.style.setProperty('--progress-bar-color', '#FF5338');
        }
    }
});
