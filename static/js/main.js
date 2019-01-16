var numOptions = 4;
var options = [];
var answer;
var country;
var optionButtons = document.querySelectorAll("#option");

getdata();


// function buttonClick(){
//   $("button").click(function(){
//     console.log(but)
//   });
// }
// $(this).html("abcd");

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
				// console.log(options[i]);
				console.log(optionButtons[i]);
				optionButtons[i].innerHTML= options[i];
			}
			console.log(result);
			answer = result.answer;
			country = result.country;
			$('#country-name').html(country);
			$(".button1").click(function(){
					console.log("click1");
					button = document.querySelector(".button1");
					val = button.innerHTML;
					console.log(val);
					if(val == result.answer)
					{
						console.log("correct");
						$(this).css('background', 'green');
					}
					else
					{
						console.log("wrong");
						$(this).css('background', 'red');
					}					
				});

			$(".button2").click(function(){
					console.log("click1");
					button = document.querySelector(".button2");
					val = button.innerHTML;
					console.log(val);
					if(val == result.answer)
					{
						console.log("correct");
						$(this).css('background', 'green');
					}
					else
					{
						console.log("wrong");
						$(this).css('background', 'red');
					}					
				});

			$(".button3").click(function(){
					console.log("click1");
					button = document.querySelector(".button3");
					val = button.innerHTML;
					console.log(val);
					if(val == result.answer)
					{
						console.log("correct");
						$(this).css('background', 'green');
					}
					else
					{
						console.log("wrong");
						$(this).css('background', 'red');
					}					
				});

			$(".button4").click(function(){
					console.log("click1");
					button = document.querySelector(".button4");
					val = button.innerHTML;
					console.log(val);
					if(val == result.answer)
					{
						console.log("correct");
						$(this).css('background', 'green');
					}
					else
					{
						console.log("wrong");
						$(this).css('background', 'red');
					}					
				});
		}
	});	
}
