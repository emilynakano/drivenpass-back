<div align="center"> 
	<h1> DrivenPass </h1>
<div />

19th project project at Driven Education.

A password manager API.

 ### Technologies
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,express,postgres,prisma,nodejs" />
  </a>
</p>

<br>


<div align="center"> 
	<h1> Documentation </h1>
<div />
<div align="start"> 
	<h2> User Registration</h2>
  <h3> <span style="color:green">POST </span> /sign-up</h3>
  <h3> Send a request body in this format:</h3>
  

```
{
	name: Fulano,
    email: fulano@gmail.com,
    password: 1234567890,
    checkPassword: 1234567890
}
```
<div />

<div align="start"> 
	<h2> User Login</h2>
  <h3> <span style="color:green">POST </span> /sign-in</h3>
  <h3> Send a request body in this format:</h3>
  

```
{
    email: fulano@gmail.com,
    password: 1234567890
}
```

<h3> The server will respond with an object in this format:</h3>

```
{
    token: jyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
}
```
<div />

<div align="start"> 
	<h2> Credential Creation</h2>
  <h3> <span style="color:green">POST </span> /credentials</h3>
  <h3> Send a Authorization Header with format Bearer Token, and  a Request Body in this format:</h3>
  

```
{
  "title": "twitter"
  "url": "https://mobile.twitter.com/" , 
  "username": "twitterUser", 
  "password": "twitterPassword"
}
```
<div />

<div align="start"> 
	<h2> Get User Credentials</h2>
  <h3> <span style="color:green">GET </span> /credentials</h3>
  <h3> Send a Authorization Header with format Bearer Token.</h3>
  <h3> The server will respond with an array in this format: </h3>
  

```
[
  {
    "id": 1,
    "title": "twitter"
    "url": "https://mobile.twitter.com/" , 
    "username": "twitterUser", 
    "password": "twitterPassword"
  }
] 
```
<div />

<div align="start"> 
	<h2> Get Credential By Id</h2>
  <h3> <span style="color:green">GET </span> /credentials/:id</h3>
  <h3> Send a Authorization Header with format Bearer Token.</h3>
  <h3> Replace ":id" to desired id</h3>
  <h3> The server will respond with an object in this format: </h3>
  

```
{
  "id": 1,
  "title": "twitter"
  "url": "https://mobile.twitter.com/" , 
  "username": "twitterUser", 
  "password": "twitterPassword"
}
```
<div />
