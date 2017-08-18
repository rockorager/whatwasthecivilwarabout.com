var quotes = [
{
	"quote": 'If the people of the North have the power by Congress "to promote the general welfare of the United States," by any means they deem expedient, why should they not assail and overthrow the institution of Slavery in the South?',
	"author": "South Carolina 1860, The Address of the people of South Carolina, assembled in Convention, to the people of the Slaveholding States of the United States"
},{
	"quote": "Our position is thoroughly identified with the institution of slavery - the greatest material interest of the world. Its labor supplies the product, which constitutes by far the largest and most important portions of commerce of the earth. These products are peculiar to the climate verging on the tropical regions, and by an imperious law of nature, none but the black race can bear exposure to the tropical sun. These products have become necessities of the world, and a blow at slavery is a blow at commerce and civilization. That blow has been long aimed at the institution, and was at the point of reaching its consummation. There was no choice left us but submission to the mandates of abolition, or a dissolution of the Union, whose principles had been subverted to work out our ruin.",
	"author": "Mississippi 1861, A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi from the Federal Union",
},{
	"quote": "The question of Slavery is the rock upon which the Old Government split: it is the cause of secession.",
	"author": "G. T. Yelverton 1861, speaking to the Alabama Secession Convention",
},{
	"quote": "The people of Georgia having dissolved their political connection with the Government of the United States of America, present to their confederates and the world the causes which have led to the separation. For the last ten years we have had numerous and serious causes of complaint against our non-slave-holding confederate States with reference to the subject of African slavery.",
	"author": "Georgia 1861, Declaration of Causes of Secession",
},{
	"quote": "The prohibition of slavery in the Territories is the cardinal principle of this organization.",
	"author": "Georgia 1861, Declaration of Causes of Secession",
},{
	"quote": "So bitter is this hostility felt toward slavery, which these fifteen states regard as a great social and political blessing, that it exhibits itself in legislation for the avowed purpose of destroying the rights of slaveholders guaranteed by the Constitution and protected by the Acts of Congress",
	"author": "Thomas Overton Moore 1860, Governor of Independent Louisiana. Spoken during his inaugural address",
},{
	"quote": "She [Texas] was received as a commonwealth holding, maintaining and protecting the institution known as negro slavery--the servitude of the African to the white race within her limits--a relation that had existed from the first settlement of her wilderness by the white race, and which her people intended should exist in all future time.",
	"author": "Texas 1861, A declaration of the causes which impel the State of Texas to secede from the Federal Union",
},{
	"quote": "The great question which is now uprooting this Government to its foundation – the great question which underlies all our deliberations here, is the question of African slavery.",
	"author": "Thomas F. Goode 1861, speech to the Virginia Secession Convention",
}
,{
	"quote": "The extension of slavery is the vital point of the whole controversy between the North and the South",
	"author": "Governor of Arkansas Henry M Rektor 1861, speaking at the Arkansas Secession Convention",
}]

function newQuote() {
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	randomQuote = quotes[randomNumber];
	document.getElementById('quote').innerHTML = '"' + randomQuote.quote + '"';
	document.getElementById('author').innerHTML = randomQuote.author;
}
