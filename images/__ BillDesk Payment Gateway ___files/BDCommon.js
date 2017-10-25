// JavaScript Document


function DispCardType() {
var cardTypes = [ 'visa', 'masterCard', 'maestro', 'discover' ];
//var value = document.form1.cnumber.value;
var CardValue = document.getElementById('cdTypdisp');
//alert(CardValue.value);
if(CardValue.value > 0 || CardValue.value == 0) {
//alert(value);
	var first = CardValue.value[0];
	var cardType = 'unknown';
	var cvvType = 'visacvv';
	switch(first) {
		case '4': cardType = 'visa'; cvvType = 'visacvv';			break;
		case '5': cardType = 'masterCard'; 		break;
		case '50': cardType = 'maestro'; 		break;
		case '3': cardType = 'unknown'; cvvType = 'amexcvv'; break;
		case '6': cardType = 'maestro'; 		break;
		default:  cardType = 'unknown'; 		break;
	}
	document.getElementById("cardTypeid").className = cardType;
	document.getElementById("cvvTypeid").className = cvvType;
	//$("#fieldSetid").addClassName(cardType); 
	//this.fieldSetid.addClassName(cardType); 
}
}

function DispCreditCardType() {
var cardTypes = [ 'visa', 'masterCard', 'maestro', 'discover' ];
var CreditCardValue = document.getElementById('CreditcdTypdisp');
if(CreditCardValue.value > 0 || CreditCardValue.value == 0) {
//alert(value);
	var first = CreditCardValue.value[0];
	var cardType = 'cc_unknown';
	var cvvType = 'visacvv';
	switch(first) {
		case '4': cardType = 'cc_visa'; 			cvvType = 'visacvv';			break;
		case '5': cardType = 'cc_masterCard'; 		break;
		case '50': cardType = 'cc_maestro'; 		break;
		case '3': cardType = 'cc_americanExpress'; cvvType = 'amexcvv'; break;
		case '6': cardType = 'cc_maestro'; 			break;
		default:  cardType = 'cc_unknown'; 			break;
	}
	document.getElementById("cardTypeid").className = cardType;
	document.getElementById("cvvTypeid").className = cvvType;
	//$("#fieldSetid").addClassName(cardType); 
	//this.fieldSetid.addClassName(cardType); 
}
}

function WindowOpen(url)
{
    var hWnd = window.open(url,"NewWindow","width=640,height=550,resizable=no,scrollbars=yes");
    if (hWnd.focus != null) hWnd.focus();
}







function checkName(str)
{
	str = trimSpaces(str);
	if(str=="")
	{ return true; }
	else if(str.length>50 || str.length < 3)
	{ return true; }
	else if(!(checkForPraSpcChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ. ",str)))
	{ return true; }
	else
	{  return false; }
}

function checkForPraSpcChar(str, obj)
{
	var str1 = str;
	var str2 = obj;
	var str2Len = obj.length;
	var i,j;
	var ch;
	var check=false;
	for (i=0; i<str2.length; i++)
	{
	check=false;
	ch = str2.charAt(i);
		for (j=0; j<str1.length; j++)
		{
			if (ch == str1.charAt(j))
			{
					check=true;
		break;
	    }
	}
		if (!check)
			break;
	}
	    return check;
}

function trimSpaces (str)
{
var len = str.length;
var str1 = str;
var loop=true;
while(loop)
{
	if (str1.charAt(0) == " ")
	{
		str1 = str1.substring(1);
		len = str1.length;
	}
	else if(str1.charAt((len-1)) == " ")
	{
		str1 = str1.substring(0,(len-2));
		len = str1.length;
	}
	else
	{ loop = false; }
}
return (str1);
}
function mod10( cardNumber ) {
	var ar = new Array( cardNumber.length );
	var i = 0,sum = 0;
	for( i = 0; i < cardNumber.length; ++i ) {
		ar[i] = parseInt(cardNumber.charAt(i));
	}
	for( i = ar.length -2; i >= 0; i-=2 ) {
		ar[i] *= 2;
		if( ar[i] > 9 ) ar[i]-=9;
	}
		for( i = 0; i < ar.length; ++i ) {
			sum += ar[i];
		}
		return (((sum%10)==0)?true:false);
}




function CCPopUp(SEALURL, cId){
  window.open(""+SEALURL+"index.php?page=showCert&cId="+cId+"", "win",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=700,height=585');
  self.name = "mainWin";
}






function checkAddress(str)
{
	str = trimSpaces(str);
	if(str=="") { return true; }
	else if(str.length>128 || str.length < 3) {  return true; }
	else if(!(checkForPraSpcChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789., #&()/-_",str)))
	{ return true; }
	else
	{ return false; }
}

function checkCity(str) {
	str = trimSpaces(str);
	if(str=="") { return true; }
	else if(str.length>128 || str.length < 1) { return true; }
	else if(!(checkForPraSpcChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ",str))) { return true; }
	else { return false; }
}
function checkState(str) {
	str = trimSpaces(str);
	if(str=="")  { return true; }
	else if(str.length>128 || str.length < 3) { return true; }
	else if(!(checkForPraSpcChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ",str))) { return true; }
	else  { return false; }
}
function checkPinCode(str) {
	str = trimSpaces(str);
	if(str=="") return true;
	else if(str.length>9 || str.length < 3) return true;
	else if (!(checkForPraSpcChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ",str))) { return true; }
	else  { return false; }
}

function CardHolder() {
for (var i=0; i < document.form1.citizen.length; i++)
{
   if (document.form1.citizen[i].checked)
	{
	  var citizen_val = document.form1.citizen[i].value;
	  //alert(rad_val);
	}
}

if (citizen_val=="yes") {
	$("#IndianHolder").find('input[type=text] , input[type=password]').attr('value','');
	document.getElementById("IndianHolder").style.display='';
	document.getElementById("InternationalHolder").style.display = 'none';
 }
if (citizen_val=="no") {
	$("#InternationalHolder").find('input[type=text] , input[type=password]').attr('value','');
	document.getElementById("InternationalHolder").style.display='';
	document.getElementById("IndianHolder").style.display = '';
 }   
}