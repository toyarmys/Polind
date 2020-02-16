// var course = [
// 	'Javascript', 'CSS', 'HTML', 'PHP', 'Ruby'
// ];
// var courseLength = course.length;
// for(var i=0; i<courseLength;i++){
// 	console.log(course[i]);
// }

// var addCourse = course.unshift('Jquery');
// console.log(course);
// var deleteCourse = course.pop();
// console.log(course);
// course.push('React, Angular, CakePHP');
// console.log(course);
// var sliceCourse = course.slice(0, 3);
// console.log(sliceCourse);

var students = [
];
var studentsLength = students.length;
function renderView(){
	var html = '';
	for(var i=0;i<studentsLength;i++){
		var student = students[i];
		html += '<li>';
		html += '<h5>' + (i+1) + '</h5>';
		html += '<h2>' + student.name + '</h2>';
		html += '<h3>' + student.age + '</h3>';
		html += '<h4>' + student.address + '</h4>';
		html += '</li>';
	}
	var student_each = document.getElementById('student-data');
	student_each.innerHTML = html;
};
document.addEventListener('DOMContentLoaded', function(){
	var submit_button = document.getElementById('submit');

	submit_button.addEventListener('click', function(){
		var student_name = document.getElementById('name').value;
		var student_age = document.getElementById('age').value;
		var student_address = document.getElementById('address').value;
		var new_student ={
			name: student_name,
			age: student_age,
			address: student_address
		};
		students.push(new_student);
		console.log(students);
		renderView();
	});
	renderView();
});


