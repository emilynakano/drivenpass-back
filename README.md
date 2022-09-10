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

# Documentation


<div align="start"> 

  ### User Registration
  
  POST /sign-up
  
  Send a request body in this format:
  

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

  ### User Login
  
  POST /sign-in
  
  Send a request body in this format
  

```
{
    email: fulano@gmail.com,
    password: 1234567890
}
```

The server will respond with an object in this format:

```
{
    token: jyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
}
```
<div />

<div align="start"> 

  ### Credential Creation</h2>
  
  POST /credentials
  
  Send a Authorization Header with format Bearer Token, and  a Request Body in this format:
  

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
   
   ### Get User Credentials
   
  POST /credentials
  
  Send a Authorization Header with format Bearer Token.
  
  The server will respond with an array in this format:
  

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
  
  ### Get Credential By Id
 
  GET </span> /credentials/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with an object in this format: 
  

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
	
	
<div align="start"> 

  ### Network Creation</h2>
  
  POST /networks
  
  Send a Authorization Header with format Bearer Token, and  a Request Body in this format:
  

```
{
  "title": "neighbor's wifi"
  "networkName": "5g-Net" , 
  "password": "neighborPassword"
}
```
<div />

<div align="start"> 
   
   ### Get User Networks
   
  POST /networks
  
  Send a Authorization Header with format Bearer Token.
  
  The server will respond with an array in this format:
  

```
[
 {
   "id": 1,
   "title": "neighbor's wifi"
   "networkName": "5g-Net" , 
   "password": "neighborPassword"
 }
] 
```
<div />

<div align="start"> 
  
  ### Get Network By Id
 
  GET </span> /networks/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with an object in this format: 
  

```
{
  "id": 1,
  "title": "neighbor's wifi"
  "networkName": "5g-Net" , 
  "password": "neighborPassword"
}
```
<div />

