function createTable() {
    //Write your code here
	let rn=Number(prompt("Input number of rows"));
	let cn=Number(prompt("Input number of columns"));
	if(isNaN(rn)||isNaN(cn)){
		return;
	}
	let table=document.getElementById("myTable");
	table.innerHTML="";
	for(let i=0;i<rn;i++){
		let row=table.insertRow();
		for(let j=0;j<cn;j++){
			let cell=row.insertCell();
			cell.textContent=`Row-${i} Column-${j}`;
		}
	}
	
  
}
