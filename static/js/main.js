var numOptions = 4;
var options = [];
var answer;
var country;
var optionButtons = document.querySelectorAll("#option");

getdata();

function getdata()
{
	console.log("ready");
	$.ajax({
		contentType: "application/json; charset=utf-8",
		url: "/getData",
		type: "get",
		success:function(result){
			options = result.options;
			for(var i = 0; i<numOptions; i++)
			{
				console.log(options[i]);
				optionButtons[i].innerHTML= options[i];
			}
			console.log(result);
			answer = result.answer;
			country = result.country;
			$('#country-name').html(country);
			for(var j = 0; j<numOptions; j++)
			{
				optionButtons[j].addEventListener("click", function(){
					console.log(j)
					console.log(optionButtons[j].innerHTML);
					if(optionButtons[j].innerHTML == result.answer)
					{
						optionButtons[j].style.background == "green";
					}
					else
					{
						optionButtons[j].style.background == "red";
					}
				});
			}
		}
	});	
}
