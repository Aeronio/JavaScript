//GETTING HTML
//NOTE The javascript code HAS to appear below the element you are trying to grab in the HTML file
//It's the same, <script src="code.js"></script>
//It's just not in the head section

var header = document.getElementById("myHeader"); //Uses the id in HTML
header.style="color:blue; background-color:red;"  //So you can change CSS here
header.innerHTML = "Elephant Academy"; //innterHTML changes the actual text in the tag
document.write(header.getAttribute("giraffe"));  //This variable/attribute was declared within the h1 tag in HTML, it's a custom attribute