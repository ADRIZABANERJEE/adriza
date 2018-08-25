var app=angular.module("adriza",[]);
app.filter("rangeFilter",function()
{
	var f1=function(input,min,max)
   {
	var output=[];
	for(var i in input)
	  {
		if(input[i].price>=min && input[i].price<=max)
		  {
			output.push(input[i]);
		  }
	  }	
	return output;
   };
return f1;
});
app.controller("ProductController",function($scope)
{
	$scope.x="8000";
	$scope.y="20000";
	$scope.products=[
	{pname:"Bangles",brand:"Gold",price:8075,picture:"jewel1.jpeg"},
	{pname:"NL1916 Gold Plated Leaf Design",brand:"Gold",price:8275,picture:"jewel2.jpeg"},
	{pname:"Traditional Pearl Jewellery Bangles",brand:"Pearl",price:9275,picture:"jewel3.jpg"},
	{pname:"Bangles",brand:"Gold",price:9200,picture:"jewel4.jpg"},
	{pname:"Old style bangles",brand:"Gold",price:9555,picture:"jewel5.jpg"},
	{pname:"The Celine Diamond Necklace ",brand:"diamond",price:10275,picture:"neck1.jpg"},
	{pname:" Antique Necklace",brand:"Gold",price:11275,picture:"neck2.jpg"},
	{pname:"Short Necklace 4 ",brand:"Gold",price:15275,picture:"neck3.jpg"},
	];
});