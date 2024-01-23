

let close = document.getElementById('close');
let container = document.getElementById('image');
let form = document.getElementById('form');
let button = document.getElementById('button');


button.addEventListener('click', ()=>{
	form.style.display = "flex";
	container.style.display = "none";

});

close.addEventListener('click', ()=> {
	container.style.display = "flex";
	form.style.display = "none";

});



//form field 
let formText = document.getElementById('text');
let formTel = document.getElementById('tel');
let formEmail = document.getElementById('email');
let submit = document.getElementById('submit');
let output = document.getElementById('output');
let error = document.getElementById('error');
let forms = document.getElementById('formin');

submit.addEventListener('click', ()=>{
	console.log(formText.value);
	console.log(formTel.value);
	console.log(formEmail.value.length);
	console.log(formText.value.length & formTel.value.length & formEmail.value.length);

	if (!formText.value) {
		setTimeout(()=>{
			error.style.display = 'block';
		}, 1500);
	}

	if (!formTel.value){
		error.style.display = 'block';
	}

	if (!formEmail.value){
		error.style.display = 'block';
	}
	
	if ((formText.value.length && formTel.value.length && formEmail.value.length)){
		error.style.display = 'none';
		forms.reset();
		output.style.display = 'block';
		setTimeout(()=>{
			document.getElementById('output').style.display = 'none';

		}, 1500);
	}
});


