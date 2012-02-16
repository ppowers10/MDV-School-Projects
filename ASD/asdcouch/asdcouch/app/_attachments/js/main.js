//Patrick Powers, Project 1 MiU, 1202, 2/2/2011


$(document).ready(function(){
	
//Ajax call for JSON
//	var showjson = $('#listAll').live('pageinit', function(){
	$('#showjson').live('click', function(){
		$('#listAllRec').empty();
		$.ajax({
			url: "_view/recall",
			type: "GET",
			dataType: "json",
			success: function(response){
				console.log(response);
					$.each(response.rows, function(index, rec){
						var id = rec.id
						var oneRec = {};
							oneRec.category = rec.value.groups1;
							oneRec.name		= rec.value.name;
							oneRec.rating	= rec.value.rating;
							oneRec.comments	= rec.value.comments;
							oneRec.phonenum = rec.value.phonenum;
							oneRec.email	= rec.value.email;
							oneRec.url		= rec.value.url;
							oneRec.location = rec.value.location;
						$(''+
							'<li>' +
								'<a href= "#'+ id +'" id="' + id + '">' +
									'<img src="images/' + oneRec.category + '.png">' +
									'<h2>' + oneRec.name +'</h2>' +
									'<p>' + 'Rating: ' + oneRec.rating + '</p>' + 
								'</a>' +
							'</li>'
						).appendTo('#listAllRec');
					});
					$("#listAllRec").listview("refresh");
			},
			error: function(result){ console.log(result);}
		});
	});
	
//var createRecPage = function(){
	
//};
	
	
function createPage (){
	var createThisPage = this._id
};

	//$('#form').live('pageinit', function(){
		
		toggleControls('off');
		
		var recform = $("#recommendationform");
		
		recform.validate({
			//invalidHandler: function(form, validator){},
			submitHandler: function(){
				var data = recform.serializeArray();
				storeData(data)
				console.log(data);
			}
		});
	
		function toggleControls(n){
				switch(n){
					case "on":
						$('#recommendationform').css("display" , "none");
						$('#clearRec').css("display" , "inline");
						$('#displayRec').css("display" , "none");
						$('#addRec').css("display" , "inline");
						break;
					case "off":
						$('#recommendationform').css("display" , "block");
						$('#clearRec').css("display" , "block");
						$('#displayRec').css("display" , "block");
						$('#addRec').css("display" , "none");
						$('#items').css("display" , "none");
						break;
					//	break;
					default:
						return false;
				}
			}
		
		function formBack(){
			toggleControls('off');
		}	
		
		function storeData(data){
				if(!data.key){
					var id 					= Math.floor(Math.random()*10000001);
				}else{
					var id = data.key;
				}
				var item 				= {};
					item.groups1		= ["Category:  ", data[0].value];
					item.name			= ["Recommendation Title:  ", data[1].value];
					item.rating			= ["Rating (1=bad, 5=amazing):  ", data[2].value];
					item.comments		= ["Comments:  ", data[3].value];
					item.phonenum		= ["Phone Number:  ", data[4].value];
					item.email			= ["Email:  ", data[5].value];
					item.url			= ["Website:  ", data[6].value];
					item.location		= ["Location:  ", data[7].value];
				//Save data into Local Storage: Use Stringify to convert our object to a string
				localStorage.setItem(id, JSON.stringify(item));
				console.log(id, JSON.stringify(item))
				alert("Recommendation Saved");
				
				}
		
		function getData(){
				toggleControls('on');
				if(localStorage.length === 0){
					autoFillData();
					alert("There are no current recommendations, so default data was added.");
				}
				//Write Data from Local Stograge to the browser.
				var makeDiv = $('<div></div>');
				makeDiv.attr("id", "items");
				var makeList = $('<ul></ul>');
				makeDiv.append(makeList);
				$("#recommendationform").after(makeDiv);
				$("#items").css("display", "block");
				for(var i=0, j=localStorage.length; i<j; i++){
					 var makeLi = $('<li></li>');
					 makeLi.attr("class", "recos");
					 var linksLi = $('<li></li>');
					 makeList.append(makeLi);
					 var key = localStorage.key(i);
					 var value = localStorage.getItem(key);
					//Convert the string from local storage value back to an object by using JSON.parse().
					 var obj = JSON.parse(value);
					 console.log(JSON.parse(value));
					 var makeSubList = $('<ul></ul>');
					 makeLi.append(makeSubList);
					 getImage(obj.groups1[1], makeSubList);
					 for(var n in obj){
					 	var makeSubLi = document.createElement('li');
					 	makeSubList.append(makeSubLi);
					 	var optSubText = obj[n][0]+" "+obj[n][1];
					 	makeSubLi.innerHTML = optSubText;
					 	makeSubList.append(linksLi); 
					 }
				//	 for(var n in obj){
				//	 	var makeSubLi = $('<li></li>');
				//	 	makeSubList.append(makeSubLi);
				//	 	var optSubText = obj[n][0]+" "+obj[n][1];
				//	 	makeSubLi.innerHTML = optSubText;
				//	 	makeSubList.append(linksLi); 
				//	 }
					makeItemLinks(localStorage.key(i), linksLi); //Create our edit and delete buttons or links for each item in local storage
				}
				//$("#form").listview("refresh");
			}
		
		function getImage(catName, makeSubList){
			var imageLi = $('<li></li>');
			imageLi.css("display", "inline");
			makeSubList.append(imageLi);
			var newImg = $('<img></img>');
			var setSrc = newImg.attr("src", "images/"+ catName +".png");
			setSrc.css("display", "inline");
			imageLi.append(newImg);
		}
		
		//JSON Object which will auto populate local storage
		function autoFillData(){	
			json;
			//Store the JSON OBJECT into Local Storage
			for(var n in json){
				var id = Math.floor(Math.random()*10000001);
				localStorage.setItem(id, JSON.stringify(json[n]));
			}
		}
		
		function makeItemLinks(key, linksLi){
			//add edit signle item link
			var editLink = $('<a></a>');
			editLink.attr({
				"data-role": "button", 
				"id": "changeItem"
			});
			editLink.href = "#";
			editLink.key = key;
			var editText = "Edit";
			editLink.html(editText);
			linksLi.append(editLink);
			editLink.bind("click", editItem);
			
			//add a delete single item link
			var deleteLink = $('<a></a>');
			deleteLink.attr({
				"data-role": "button",
				"id": "deleteItem"
			});
			deleteLink.href = "#";
			deleteLink.key = key;
			var deleteText = "Delete";
			deleteLink.bind("click", deleteItem);
			deleteLink.html(deleteText);
			linksLi.append(deleteLink);
		}
		
		//Edit Single Item
		function editItem(key){
			console.log(key);
			//Grab the data from our item from Local Storage.
			var value = localStorage.getItem(this.key);
			console.log(localStorage.getItem(this.key));
			var item = JSON.parse(value);
			console.log(JSON.parse(value));
			//Show the from to edit the items
			toggleControls("off");
			
			//populate the form feilds with the current localStorage values.
			$('#groups1').value 	= item.groups1[1];
			$('#name').value		= item.name[1];
			$('#rating').value 		= item.rating[1];
			$('#phonenum').value 	= item.phonenum[1];
			$('#email').value		= item.email[1];
			$('#comments').value 	= item.comments[1];
			$('#location').value	= item.location[1];
			
			//Remove the initial listener from the input "save" button.
			save.removeEventListener("click", storeData);
			//Change Submit button value to Save Edit
			$('#submit').val = "Save Edit";
			var editSubmit = $('#submit');
			//Save the key value established in this function as a property of the editSubmit event
			//so we can use that value when we save the data that we edited
			editSubmit.bind("click", recform.validate);
			editSubmit.key = this.key;
		}
		
		function deleteItem(){
			var ask = confirm("Are you sure you want to delete this recommendation?");
			if(ask){
				localStorage.removeItem(this.key);
				alert("Recommendation was deleted.");
				window.location.reload();
			}else{
				alert("Recommendation was not deleted.");
			}
		}
		
		function clearLocal(){
			if(localStorage.lenght === 0){
				alert("There are no recommendations to clear.");
			}else{
				localStorage.clear();
				alert("All recommendations were deleted!");
				window.location.reload();
				return false;
			}
		}
	
		
		$('#displayRecommendation').bind("click", getData);
		$('#clearRecommendation').bind("click", clearLocal);
		$('#addRec').bind("click", formBack);

});