import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
// https://prod.spline.design/KM1Kt9xSuyb7rHI5/scene.splinecode

spline
	.load('https://prod.spline.design/KM1Kt9xSuyb7rHI5/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('Cube');
		// or
		// const obj = spline.findObjectById('7AF5EBC0-09BB-4720-B045-F478F8053AA4');
        spline.addEventListener('mouseDown', (e) => {
			// 检查是否点击了名为'Cube'的对象
			if (e.target.name === 'Cube') {
                console.log('点击了Cube');
				// 旋转90度
				// 注意：Spline使用的是弧度而不是度，所以需要将度转换为弧度
				// Math.PI / 2 弧度等于90度
				e.target.rotation.y += Math.PI / 2;
			}});
		console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

	});