function generateFortuneCookie(){
	var fortunesList = ["Death.", "Meth.", "Seth.", "Beth.", "Jeth.", "Peth.", "Teth.", "Neth.", "Veth.", "Ceth.", "Xeth.", "Zeth.", "Feth.", "Heth.", "Leth.", "Yeth.", "Reth.", "Peth.", "Weth.", "Qeth.", "Geth."];
	var node = document.createElement("LI");
	var textnode = document.createTextNode(fortunesList[Math.floor((Math.random() * 10) + 1)]);
	var fort = document.getElementById("list");
	var prev = document.getElementById("previouslist");
	node.appendChild(textnode);
	document.getElementById("list").appendChild(node);
	var button = document.getElementsByTagName("button")[0];
	var att = document.createAttribute("onclick");
	att.value = "generateNewFortune()";
	document.getElementsByTagName("button")[0].removeAttribute("id");
	button.setAttributeNode(att);
}

function generateNewFortune(){
	var fortunesList = ["Death.", "Meth.", "Seth.", "Beth.", "Jeth.", "Peth.", "Teth.", "Neth.", "Veth.", "Ceth.", "Xeth.", "Zeth.", "Feth.", "Heth.", "Leth.", "Yeth.", "Reth.", "Peth.", "Weth.", "Qeth.", "Geth."];
	var node = document.createElement("LI");
	var textnode = document.createTextNode(fortunesList[Math.floor((Math.random() * 10) + 1)]);
	var fort = document.getElementById("list");
	var prev = document.getElementById("previouslist");
	node.appendChild(textnode);
	document.getElementById("previouslist").appendChild(node);
	var button = document.getElementsByTagName("button")[0];
	var att = document.createAttribute("onclick");
	att.value = "generateFortuneCookie2()";
	document.getElementsByTagName("button")[0].removeAttribute("id");
	button.setAttributeNode(att);
}