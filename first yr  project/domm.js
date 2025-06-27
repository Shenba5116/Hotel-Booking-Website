function show(eltId, URL){
		var elt=document.getElementById(eltId);
		elt.setAttribute("src",URL);
		return;
}
function changeText(id){
	id.textContent="Book Now to get 50% offer.........";
	id.style.backgroundColor="gray";
}
function enlarge(){
	document.getElementById('hdom').style.transform="scale(1.4)";
	document.getElementById('hdom').style.fontStyle="italic";
}
function delarge(){
	document.getElementById('hdom').style.transform="scale(1)";
	document.getElementById('hdom').style.fontStyle="";

}

