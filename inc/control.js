$(document).ready(function() {
	//var ref_bytitle = "http://www.omdbapi.com/?t=fight+club&y=&plot=short&r=json";
	var ref_bytitle = "http://www.omdbapi.com/";
	var ref_byid = "http://www.omdbapi.com/?i=tt0137523&plot=short&r=json";
	$(document).on("keypress", "#by-title", function(e) { 
		if(e.which == 13 || e.type == 13) { 
			$("#get-json-by-title").click();
		}
	});
	$(document).on("click", "#get-json-by-title", function() {
		console.log("GET: "+ref_bytitle);
		var search = ($("#by-title").val() ? $("#by-title").val() : "");
		if(search.length) { 
			$.ajax({
				type: "GET",
				url: ref_bytitle,
				data: { 
					t: search,
					y: "",
					plot: "short",
					r: "json"
				},
				success: function(res) { 
					console.log("Response: ");
					console.log(JSON.stringify(res, null, 2));
					$("#target").html(JSON.stringify(res, null, 2));
				},
				error: function(data, ajaxOptions, thrownError) {
					console.error(data.status, thrownError);
				}
			});
			console.log("Ajax Complete...");
		} else { 
			$("#target").html("You must enter a search term...");
		}
	});
});
