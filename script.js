function firstChar(text) {
  // your code here
	text=text.trim();
	let j=0;
	for(let i=0;i<text.length;i++)
		{
			if(text.charAt(i)==' ')
			{
				j=i;
				break;
			}
		}
	if(text.length>1)
	{
		return text.substring(0,j-1);
	}
	else
	{
		return '';
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
