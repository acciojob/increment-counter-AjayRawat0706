//your JS code here. If required.
let val=0;
let elem=document.getElementById("counter");
fun=()=>{
	alert(val);
	val+=1
	document.getElementById("counter").innerHTML =val;
}