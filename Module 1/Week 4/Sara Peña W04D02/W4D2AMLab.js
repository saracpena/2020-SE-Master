// Go to http://dummy.restapiexample.com/ (Links to an external site.)

// Identify all the HTTP methods for this API:

1. Get
2. Post
3. Put
4. Delete

// Identify the differences in their URLs

    http://dummy.restapiexample.com/api/v1/employees   ends with the info intended to be retrieved i.e. employees
	http://dummy.restapiexample.com/api/v1/create      ends with "post" i.e. create
	http://dummy.restapiexample.com/api/v1/update/21   ends with "put" i.e. update
    http://dummy.restapiexample.com/api/v1/delete/2	   ends with "Delete" i.e. delete


// What are different types of Web Services?

    Web services work on client-server model where client applications can access web services over the network. 
    Web services provide endpoint URLs and expose methods that can be accessed over network through client programs written in java, shell script or any other different technologies.
    Web services are stateless and doesn’t maintain user session like web applications.

//TYPES:

Web template.
JSON-RPC.
JSON-WSP.
Web Services Description Language (WSDL)
Web Services Conversation Language (WSCL)
Web Services Flow Language (WSFL)
Web Services Metadata Exchange (WS-MetadataExchange)
XML Interface for Network Services (XINS)


// What are disadvantages of SOAP Web Services?

*    Only XML can be used, JSON and other lightweight formats are not supported.
*    SOAP is based on the contract, so there is a tight coupling between client and server applications.
*    SOAP is slow because payload is large for a simple string message, since it uses XML format.
*    Anytime there is change in the server side contract, client stub classes need to be generated again.
*    Can’t be tested easily in browser


// What are disadvantages of REST web services?

*    Since there is no contract defined between service and client, it has to be communicated through other means such as documentation or emails.
*    Since it works on HTTP, there can’t be asynchronous calls.
*    Sessions can’t be maintained.

// What are different HTTP Methods supported in Restful Web Services?

    Restful web services supported HTTP methods are – GET, POST, PUT, DELETE and HEAD.

// What is JAX-RS API?

    Java API for RESTful Web Services (JAX-RS) is the Java API for creating REST web services. 
    JAX-RS uses annotations to simplify the development and deployment of web services. 
    JAX-RS is part of JDK, so you don’t need to include anything to use it’s annotations.

// Create a URI for the different Http Verbs for a School.

    //service: name type and id


// “URI” and “URL” are often used interchangeably, but they are not exactly the same.

// A URI is an identifier of a specific resource. Like a page, or book, or a document.
// A URL is special type of identifier that also tells you how to access it, such as HTTPs, FTP, etc.—like https://www.google.com.
// If the protocol (https, ftp, etc.) is either present or implied for a domain, you should call it a URL—even though it’s also a URI.

GET for list of students:
http://dummy.schoolofhardknocks.com/api/v1/student
GET data on student ID#1:
http://dummy.schoolofhardknocks.com/api/v1/student/1
POST student data (undefined in this example):
http://dummy.schoolofhardknocks.com/api/v1/create
PUT additional data for student ID#21:
http://dummy.schoolofhardknocks.com/api/v1/update/21
DELETE student ID#2:
http://dummy.schoolofhardknocks.com/api/v1/delete/2