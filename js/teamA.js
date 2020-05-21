// var project = project || {};
// project.teamB = project.teamB || {}; 
// const Employee=function(firstname,middlename,lastname){
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.middlename = middlename;
// 	this.getName=function(){
// //		return this.firstname+" "+this.middlename+" "+this.lastname;
// console.log(this);
// document.getElementById("resultDiv").innerHTML = this.firstname+" "+this.middlename+" "+this.lastname;
// 	}

// 	return this;
// }
var TestNameSpace = TestNameSpace || {};
TestNameSpace.teamA = TestNameSpace.teamA || {};

TestNameSpace.teamA.customer=function(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	this.getFullName = function(){
		return this.firstname+ " " + this.lastname;
	}
	return this;
}
