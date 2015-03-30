walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bEmail Marketing\b/g, "Email Spamming");
	v = v.replace(/\bemail marketing\b/g, "email spamming");
	v = v.replace(/\bEmail marketer\b/g, "Email spammer");
	v = v.replace(/\bemail marketer\b/g, "email spammer");
	v = v.replace(/\bEmail Marketing\b/g, "E-mail Spamming");
	v = v.replace(/\bE-Mail Marketing\b/g, "Email Spamming");
	v = v.replace(/\be-mail marketing\b/g, "e-mail spamming");
	v = v.replace(/\bE-mail marketer\b/g, "E-mail spammer");
	v = v.replace(/\be-mail marketer\b/g, "e-mail spammer");
	
	textNode.nodeValue = v;
}


