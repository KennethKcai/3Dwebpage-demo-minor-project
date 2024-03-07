import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
let eventToggled = false;
let eventToggled2 = false;
let eventToggled3 = false;


spline
	.load('https://prod.spline.design/vAAb1dyoihj8PFb5/scene.splinecode')
	.then(() => {

		//console log all objects and events
		const allObjects = spline.getAllObjects();
		console.log('all objects:', allObjects);
		
		const splineEvents = spline.getSplineEvents();
		console.log('all events:', splineEvents);

		//human perspective button
		const perspectiveButton = document.getElementById('perspective-button');
		perspectiveButton.addEventListener('click', function() {
			console.log('clicked')
  		if (eventToggled) {
    		spline.emitEvent('mouseDown', 'Cube 3'); 
    		eventToggled = false;
  		} else {

    		spline.emitEventReverse('mouseDown', 'Cube 3'); 
    		eventToggled = true;
  		}	
		});
		
		//scene buttons
  		const sceneButton1 = document.getElementById('scene1');
  		sceneButton1.addEventListener('click', function() {
			
    		if (eventToggled2) {
      			spline.emitEvent('mouseDown', 'Cube 2'); 
      			eventToggled2 = false;
    		}else {
      			spline.emitEventReverse('mouseDown', 'Cube 2'); 
      			eventToggled2 = true;
    		} 

			if (eventToggled3) {
				spline.emitEvent('mouseDown', 'Cube'); 
				eventToggled3 = false;
		  	}else {
				spline.emitEventReverse('mouseDown', 'Cube'); 
				eventToggled3 = true;
		  	} 
  		});

		const sceneButton2 = document.getElementById('scene2');
  			sceneButton2.addEventListener('click', function() {
    		if (eventToggled2) {
      			spline.emitEvent('mouseDown', 'Cube 2'); 
      			eventToggled2 = false;
				eventToggled3 = true;
    		}else {
      			spline.emitEventReverse('mouseDown', 'Cube 2'); 
      			eventToggled2 = true;
				eventToggled3 = false;
    		} 

			if (eventToggled3) {
				spline.emitEvent('mouseDown', 'Cube'); 
		  	}else {
				spline.emitEventReverse('mouseDown', 'Cube'); 
		  	} 
  		});


	});



	


