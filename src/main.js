import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
let eventToggled = false;

spline
	.load('https://prod.spline.design/nTUzA-m9C6a22uwY/scene.splinecode')
	.then(() => {

		//console log all objects and events
		const allObjects = spline.getAllObjects();
		console.log('all objects:', allObjects);
		
		const splineEvents = spline.getSplineEvents();
		console.log('all events:', splineEvents);


		//human perspective button
		const perspectiveButton = document.getElementById('perspective-button');
		perspectiveButton.addEventListener('click', function() {
  		if (eventToggled) {
    		spline.emitEvent('mouseDown', 'Cube 3'); 
    		eventToggled = false;
  		} else {

    		spline.emitEventReverse('mouseDown', 'Cube 3'); 
    		eventToggled = true;
  		}	
		});

	});


	


