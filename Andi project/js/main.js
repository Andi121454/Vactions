const buttons = document.querySelectorAll('a1');
buttons.forEach(btn =>{
	btn.addEventsListener('click', function(e){

		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetLeft;

		let ripples = document.createElement('span');
		ripples.style.left = x +'px';
		ripples.style.top = y +'px';
		this.appendChild(ripples);

		setTimeOut(()=>{
			ripples.remove()

		},1000);
	})
})




