let students = [
  {name: "Alina", grade: "red"},
  {name: "Rob", grade: "red"},
  {name: "Jane", grade: "green"},
  {name: "John", grade: "yellow"},
  {name: "Mia", grade: "yellow"},
  {name: "Sean", grade: "yellow"},
  {name: "Greg", grade: "yellow"},
  {name: "Zoe", grade: "yellow"},
  {name: "Angel", grade: "green"}];

function nextStudent(students){
  let student;
  let random = Math.random();

	Math.floor(random*students.length);

	if (random < 0.47) {
		let reds = students.filter(student=>student.grade==="red");
	 	student = reds[Math.floor(Math.random()*reds.length)];
	}
	else if (random <0.79) {
 		let yellows = students.filter(student=>student.grade==="yellow");
	 	student = yellows[Math.floor(Math.random()*yellows.length)];
	}
	else {
 		let greens = students.filter(student=>student.grade==="green");
	 	student  = greens[Math.floor(Math.random()*greens.length)];
	}
  console.log(random)
	return student.name;
}


function displayName(){
  let nameContainer = document.querySelector('#nameContainer');
  nameContainer.innerHTML = '';
}

function buttonClick() {
  let nameContainer = document.getElementById('nameContainer');
  nameContainer.innerHTML = nextStudent(students);
}

displayName();
