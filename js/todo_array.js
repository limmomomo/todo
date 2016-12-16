$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var taskArray = [];

$("#add").click(function(){	
	addTask();
});

$("#remove").click(function(){	
	removeTask();
});
	
function removeTask(){
	$("#myrow").remove();
}	
function addTask(){		
	var taskObj ={};
	
	taskObj.task = $("#task").val();
	taskObj.priority = Number($("#priority").val());
	
	taskArray[index] =taskObj;
	console.log(taskArray);	
	$("#hdone").replaceWith("<th id='hdone'>Done</th>");
	$(".tasktable").append("<tr id="+index+"><th>"+(index+1)+"</th><td>"+taskArray[index].task+"</td><td>"+taskArray[index].priority+"</td><td><input type='checkbox' id='+index+'></td></tr>");
	index++;
	}
	
	});