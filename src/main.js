import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
// 'https://prod.spline.design/HGAiXo5EKsHcv1mJ/scene.splinecode'
let eventToggled = false;

spline
	.load('https://prod.spline.design/6hfXRpj2qWrs7CcG/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('Rectangle 3');
		console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

		//console log all objects and events
		const allObjects = spline.getAllObjects();
		console.log('all objects:', allObjects);
		
		const splineEvents = spline.getSplineEvents();
		console.log('all events:', splineEvents);

		const obj2 = spline.findObjectByName('Rectangle');
		obj2.emitEvent('mouseDown');


		//rotate button
		const rotateButton = document.getElementById('transform-button');
		rotateButton.addEventListener('click', function() {
			if (eventToggled){
				spline.emitEvent('mouseDown', 'Rectangle 3');
				eventToggled = false;
			}else{
				spline.emitEventReverse('mouseDown', 'Rectangle 3');
				eventToggled = true;
			}
			
		});

	});


	


