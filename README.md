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
   
  GET /credentials
  
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
  
  ### Delete Credential
 
  DELETE /credentials/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with status 200 if the request is successful.

<div />

<br />
	
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
   
  GET /networks
  
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

<div align="start"> 
  
  ### Delete Network
 
  DELETE /networks/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with status 200 if the request is successful.

<div />

<br />
	
<div align="start"> 

  ### Card Creation</h2>
  
  POST /cards
  
  Send a Authorization Header with format Bearer Token, and  a Request Body in this format, with the type field valid for "debit", "credit" and "both":
  

```
{
  "number": "1234567892345678",
  "title": "card to buy snacks",
  "holderName": "Fulano S Oliveira",
  "securityCode": "123",
  "expirationDate": "04/21",
  "password": "passwordCard",
  "isVirtual": true,
  "type": "debit"
}
```
<div />

<div align="start"> 
   
   ### Get User Cards
   
  GET /cards
  
  Send a Authorization Header with format Bearer Token.
  
  The server will respond with an array in this format:
  

```
[
 {
  "id": 1,
  "number": "1234567892345678",
  "title": "card to buy snacks",
  "holderName": "Fulano S Oliveira",
  "securityCode": "123",
  "expirationDate": "04/21",
  "password": "passwordCard",
  "isVirtual": true,
  "type": "debit"
 }
] 
```
<div />

<div align="start"> 
  
  ### Get Card By Id
 
  GET /cards/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with an object in this format: 
  

```
 {
  "id": 1,
  "number": "1234567892345678",
  "title": "card to buy snacks",
  "holderName": "Fulano S Oliveira",
  "securityCode": "123",
  "expirationDate": "04/21",
  "password": "passwordCard",
  "isVirtual": true,
  "type": "debit"
 }
```
<div />
	
<div align="start"> 
  
  ### Delete Card
 
  DELETE /cards/:id
  
  Send a Authorization Header with format Bearer Token.
  
  Replace ":id" to desired id
  
  The server will respond with status 200 if the request is successful.

<div />

<br />

