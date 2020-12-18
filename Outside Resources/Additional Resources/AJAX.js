// OK.. so AJAX and JSON are the bread + butter for how modern web apps work. 
// The A in AJAX stands for asynchronous, meaning, anytime we load new data, 
// the web page doesn’t do a full reload (in the old days, you’d have to do a full page reload to go to new page, get new data etc).

// Let’s say we want a page that shows a list of Items. The initial page loads, 
// but we now need to find out what items there are! So do to this, we’re going to make a call to our web server 
// (a “GET” request in HTTP language) 
// to a certain endpoint (endpoint is a specific address on our server that gives us the appropriate data)

// Since we don’t want the entire page to reload, we’re going to use an “AJAX” request 
// (read: an “in the background”, or asynchronous) to our “items” endpoint

// our web server, obeying our request for items, will return a list of items in JSON format, which could look like:

{
    "items": [
    { id: 1, name: "item 1},
    { id: 2, name: "item 2}
  ]
}

// So now, our web app has a list of items, and now render those on our page. 
// This can be done 100s of ways, but essentially, you’d loop over the items (with a for loops for example) 
// and then display something on the page

// For a more real world example, at Resy, 
// our app has dozens of these AJAX calls to get all kinds of data to render our complex UI and handle user interactions 
// (adding data, deleting data etc). The actual “AJAX” calls are done via a number of helper functions we wrote, 
// so  we don’t have to deal with the specifics too much, but we work with JSON directly all the time to build the UI