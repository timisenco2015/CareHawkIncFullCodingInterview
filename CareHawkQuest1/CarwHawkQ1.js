
/****
Question 1: 
	
		#Difference between call, apply, bind, this
		
		# Explanation 
		
			# In java two objects will have their own properties and method and shown below:
			
					-----------------------              ----------------------------
					Object 1								Object 2
					-----------------------				------------------------------
					
						properties							properties
						methods								methods
					-----------------------				------------------------------
				
				but in java script we can have
				
					-------------------------			------------------------------
					Object 1								Object 2
					-------------------------			------------------------------
						properties								properties

					-------------------------			-----------------------------
											-			-
												-		-
													-
												   then
												-------------
												Methods
												
				developer can use common method for the two objects
****/


// call
	var object = {number:4};

	var addToThis = function(a,b,c)
	{
		
		return ((this.number+a)/b) * c;
		
	};

	console.log("testing for call: ", addToThis.call(object,2,3,15)); // functionname.call(object, arguments); // this will return 30

	setTimeout(function()
	{
  	
		console.log("testing for call: ", addToThis.call(object,2,3,15)); // functionname.call(object, arguments); // this will return 30

	}, 1000);
	
//apply

	var addToThis = function(a, b, c)
	{
   
		return ((this.number+a)/b) * c;
		
	};
	
	console.log("testing for apply: ", addToThis.apply({number:4}, [10,2,9])); // functionname.apply(object, arguments); // this will return 63

	setTimeout(function()
	{
  		console.log("testing for apply: ", addToThis.apply({number:4}, [10,2,9])); // functionname.apply(object, arguments); // this will return 63;
	}, 1000);

//bind 
	// is a little bit different because it takes the object for example, anotherObject and makes function addTOThis a method of the anotherObject 
	//then returns an object

	
	var addToThis = function(a,b,c)
	{
		return ((this.number+a)/b) * c;
	};
	
	
	var anotherObject= {number:10};

	var bindObject = addToThis.bind(anotherObject);
	
	console.log("testing for bind: ", bindObject(10,4,3));

	setTimeout(function()
	{
		console.log("testing for bind inside timeout: ", bindObject(10,4,3));
	}, 1000);
	



//this
	this.bed='Kings size bed';
	
	var boughtBed = function(name)
	{
		let that = this;
		const innerFunction = function(_name)
		{
    
			console.log(`${name} just bought a ${that.bed}`);
		}
	
		innerFunction(name);
	};

	boughtBed.call(this,'John');

	setTimeout(function()
	{
		boughtBed.call(this,'John');
	}, 1000);



/**
	Question 2:
	
	**/
	
	
	var paraElement = document.getElementById('element')
	
	
	/**
	
		Open Start.
Search for PowerShell, right-click the top-result and click the Run as administrator option.
Type the following command to allow scripts to run and press Enter:

Set-ExecutionPolicy RemoteSigned

Type A and press Enter (if applicable).


node CarwHawkQuest2.js http://127.0.0.1:8000 fpar
**/
	


	










