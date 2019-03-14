 $(document).ready(function() {
	 
    $(".bootstrap_data").focusout(function() {
        var regExp = '^(http:|https:)?(\/\/)(tdi|nexus-test|nexus|agility)\.(ensighten|tbs|cartoonnetwork|\w+)\.(com)\/(turner|turnerintl|turneremea)?\/[a-zA-Z-0-9-_]+\/((B|b)ootstrap)\.(js)';
            var pattern = new RegExp(regExp);
			var x  =  document.getElementById("bootstrap_input").value; 
			if(document.getElementById('bootstrap_input').value !== "" ){
		    if(pattern.test(x) == true){
				 $('.bootstrap_data .alert').css('display','none');
				$('.bootstrap_data .alert.alert-success').css('display', 'block');
				 $('#brand_input').prop("disabled", false);
		    }
		    else{
				 $('.bootstrap_data .alert').css('display','none');
		         $('.bootstrap_data .alert.alert-danger ').css('display', 'block');
		    }
			}
	      else{
			   $('.bootstrap_data .alert').css('display','none');
	      $('.bootstrap_data .alert.alert-warning').css('display', 'block');
	     }
    });
	$("#brand_input").focusout(function() {
    var brand_input = document.getElementById("brand_input").value;
	if(brand_input !== 'Choose a brand name'){
					 $('#domain_input').prop("disabled", false);
				 }
	});
	$("#domain_input").focusout(function() {
		var domain_input = document.getElementById("domain_input").value;
		if(domain_input !== 'Select domain'){
			$('#account_input').prop("disabled", false);
		}
	});
	$("#account_input").focusout(function() {
		var account_input= document.getElementById("account_input").value;
		if(account_input !== ''){
			$('#space_input').prop("disabled", false);
		}
	});
	$("#space_input").focusout(function() {
		var space_input = document.getElementById("space_input").value;
		if(space_input !== ''){
		$('.code-submit').prop("disabled", false);
		}
	});
	$(".code-submit").click(function() {
		$('.btn-minify').removeClass('btn-hide');
	});
	
	 
});
function showInput() {
	
        var x  =  document.getElementById("bootstrap_input").value; 
		var brand_input = document.getElementById("brand_input").value;
		var domain_input = document.getElementById("domain_input").value;
		var space_input = document.getElementById("space_input").value;
 		var account_input= document.getElementById("account_input").value;
		var regExp = '^(http:|https:)?(\/\/)(tdi|nexus-test|nexus|agility)\.(ensighten|tbs|cartoonnetwork|\w+)\.(com)\/(turner|turnerintl|turneremea)?\/[a-zA-Z-0-9-_]+\/((B|b)ootstrap)\.(js)';
        var pattern = new RegExp(regExp);
		var inputElement = document.getElementById('bootstrap_input');
		var expected_script = document.getElementsByClassName('first_code_block')[0].innerText +'"'+ brand_input + '" :{ "' + domain_input + '" : "' + space_input+ '" }};' + document.getElementsByClassName('second_code_block')[0].innerText + '"' + brand_input + '" :{ "' + domain_input + '" : "' + account_input + '" }};' + document.getElementsByClassName('third_code_block')[0].innerText;
		document.getElementById("updatedcode").value = expected_script;
	
  }
  
