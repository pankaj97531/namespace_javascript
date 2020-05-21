// var project = project || {};
// project.teamA = project.teamA || {}; 
// const Employee=function(firstname,lastname){
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	 this.getName=function(){
// //		return this.firstname+" "+this.lastname;
// document.getElementById("resultDiv").innerHTML = this.firstname+"  "+this.lastname;
// 	} 
// 	return this;
// }

// // project.teamA.Employee.prototype.getName=function(){
// // 		return this.firstname+" "+this.lastname;
// // 	}
var TestNameSpace = TestNameSpace || {};
TestNameSpace.teamB = TestNameSpace.teamB || {};

TestNameSpace.teamB.customer=function(firstname,middlename,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.middlename = middlename;
    this.getFullName = function(){
        return this.firstname+" "+this.middlename+" "+this.lastname;
    }
    return this;
}
