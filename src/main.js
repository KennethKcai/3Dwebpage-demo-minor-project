import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
// 'https://prod.spline.design/HGAiXo5EKsHcv1mJ/scene.splinecode'

spline
	.load('https://prod.spline.design/6IPZMO5uk1wGCExP/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('Sphere');
		console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

		const obj2 = spline.findObjectById('30a4218b-dbfd-417b-9c23-2a5e924f85ec');
		console.log(obj2); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

		//console log all objects and events
		const allObjects = spline.getAllObjects();
		console.log('all objects:', allObjects);
		
		const splineEvents = spline.getSplineEvents();
		console.log('all events:', splineEvents);

		// or
		// const obj = spline.findObjectById('7AF5EBC0-09BB-4720-B045-F478F8053AA4');
        spline.addEventListener('mouseUp', (e) => {
			if (e.target.id === '30a4218b-dbfd-417b-9c23-2a5e924f85ec') {
                console.log('Clicked on Sphere');
				e.target.rotation.y += Math.PI / 2;
			}});
		
		
		const zoomSlider = document.getElementById('zoom-slider');
			//zoomSlider
		zoomSlider.addEventListener('input', function() {
			const sliderValue = this.value;
			const zoomValue = parseFloat(sliderValue);
			
			spline.setZoom(zoomValue);
		});

		const rotateButton = document.getElementById('rotate-button');
		rotateButton.addEventListener('click', function() {
		const obj = spline.findObjectByName('Sphere');
		
		if (obj) {
			obj.rotation.y += Math.PI / 2;
		}
		});

	});


	


