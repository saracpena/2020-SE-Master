<!DOCTYPE html>
<html>
<head>
	<title>what's good</title>
</head>
<!-- this is just so it looks pretty -->
<style type="text/css">
	button { 
		width: 75px; <
	}
</style>
<!--
Here I'll explain essentially how my code works. After the explanation, I'll go over how this code could have been done
better.
Variables:
The most significant variables to pay attention to are /imageUrlArr/ and /imageIndex/. I'll denote when I'm talking about 
global variables in the following format: /variable-name/. /imageUrlArr/ is an array that contains the URLs for all the 
images that I use in this project. While this is nice, it also necessitates the use of an index. Remeber that indices are
necessary to access specific values in an array. The index that I use is called /imageIndex/. So, if I wanted to access
the first item in array /imageUrlArr/, I would need /imageIndex/ to equal zero. The second item, /imageIndex/ would need
to equal 1, and so on. 
changeIndexByVal():
So, in order for this code to work, it's necessary to be able to change the index of our array via the buttons. Because
those were the instructions. So, I have a function, changeIndexByVal(), that lets me do so. It takes in /imageIndex/ and
a value, and changes /imageIndex/ by that value. It then checks whether that value is within a valid range via some if 
statements. These statements check a minimum value of zero, and a maximum value of the maximum index of /imageUrlArr/.
It was unnecessary in my code to have a global variable /indexMax/, as (imageUrlArr.length - 1) would give me the 
maximum index (I'll go over more improvements here at the end of my explanation). The "Next" button will pass a value of 
1 to changeIndexByVal(), if statements will check if this puts imageIndex in a valid range, then this valid value will be 
assigned to /imageIndex/. I'll go over the logic of the "First" and "Last" buttons later.
currentImage():
Current image passes an array (arr in the code) and an index, and then assigns the url of arr[index] to be the src of my
<img>. Really, I didn't need to pass any variables here. I could've just used the global variables I already had 
declared.
"First" and "Last" buttons (were kinda wrong):
The logic in the "First" button here is: if I add the maximum index to /imageIndex/, in most cases it will be over the 
maximum index, the if statement in changeIndexByVal() will catch it, and the index will properly loop back to the first 
item in /imageUrlArr/. This does not work on the very first index, as just the the maximum index value is legal. Adding
one to /indexMax/, or just returning the length of /imageUrlArr/, would allow changeIndexByVal() to loop properly. I
don't know which way is faster, but that's generally the better logic here. The "Last" button works like the "First"
button, but subtracting the maximum index instead. The same improvement in logic is still necessary here, as using the
last button on the while on the maximum index brings you to the first item, instead of staying at the last item. Another
way of doing this would be to have the "First" button just do: onclick ="currentImage(imageUrlArr,0);", and the "Last"
button do onclick = "currentImage(imageUrlArr, (imageUrlArr.length - 1));".
Improvements:
Improvements. I could've had currentImage() in my changeIndexByVal() function, so that I only need to call one function
in my button's onclick event. I also didn't ever need to pass variables, as I could've just used the global variables
/imageUrlArr/ and /imageIndex/ in all circumstances. Rather than having indexMax, I could've just used
(imageUrlArr.length - 1), as that would return the last index of the array, but that might overall be slower. I'm not
sure. I've also mentioned improvements in the sections above. Those still stand to. There's probably other stuff but
this is taking too long to write already, so, you do it
-->
<body>
	<img id = "image" src = "" style="width: 200px; height: 200px;"> <!--the tag that displays an image-->
	<br>
	<button id = "Next" onclick = "changeIndexByVal(imageIndex,1); currentImage(imageUrlArr, imageIndex);">
		Next
	</button>
	<button id = "Previous" onclick = "changeIndexByVal(imageIndex,-1); currentImage(imageUrlArr, imageIndex);">
		Previous
	</button>
	<br>
	<button id = "First" onclick = "changeIndexByVal(imageIndex,indexMax); currentImage(imageUrlArr, imageIndex);">
		First
	</button>
	<button id = "Last" onclick = "changeIndexByVal(imageIndex, -1 * indexMax); currentImage(imageUrlArr, imageIndex);">
		Last
	</button>
	<script type="text/javascript">
		var imageIndex = 0; //a global index for my array of images, imageUrlArr
		var indexMax = 4; //i realize in hindsight i could've just used imageUrlArr.length. oops. a max index isn't necessary because the max index is just (imageUrlArr.length - 1)
		var imageUrlArr = [ //the array that contains all the images I use here
			"https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=445&quality=85&auto=format&fit=max&s=9470f3941ff8fe61fb8f78b1838d6bc5", //blue
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Socialist_red_flag.svg/1200px-Socialist_red_flag.svg.png", //red
			"https://www.economist.com/img/b/595/335/90/sites/default/files/images/2014/06/blogs/babbage/20140628_stp501.jpg", //purple
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXjfsrG0yz1AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC", //pink
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAHlBMVEXQABv/TwD/NAP9WAD/owD/qADMABz/MQP9UQD/RwB3BMOaAAABBklEQVR4nO3QSQHAIBAEMApdDv+G8TD99JFISGu52XNr5Ha9sTpP7sOVLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFl/zrqIRprgTlF4zAAAAABJRU5ErkJggg==" //orange
		]
		currentImage(imageUrlArr,imageIndex); 
		/*
		The above, in a way, initializes <img id ='image' src = "">. src ="" means that initially, there is no image there. So, I call currentImage(), and my <img> now displays 
		the first url in /imageUrlArr/. 
		*/
		function changeIndexByVal(index,val,min,max){ //function changes the value of imageIndex by an amount val. min and max have default values, but arguments can be passed to change these.
			if (min === undefined) { min = 0; }
			if (max === undefined) { max = 4; }
			//the above is a way to have default values for min and max. 
			index += val; //adding the argument val to index
			if (index > max) { index = 0; } 
			//if the value of the index, after adding val, is greater than the maximum index (i.e. index of the last item in array), set it to zero. lets me loop through the images
			else if (index < min) { index = 4; }
			//does the same as above, but if less than the minimum index of the array, loops back to the maximum index. i didn't need to have min as a variable, i could've just used 0.
			imageIndex = index;
		};
		function currentImage(arr,index){ //function changes the src of <img id = "image"> to the url of an array passed into the function at an index passed into the function.
			document.getElementById("image").src = arr[index]; 
			//the above is essentially document.getElementById("image").src = imageUrlArr[imageIndex]. Refer to these variables' comments for their use.
		};
	</script>
</body>
</html>