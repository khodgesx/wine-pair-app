# Pour Pair
Pour Pair is a place for users to search meal pairings for wine, search wine pairings for meals, or search wines to discover and save. Users can also create their own wine data. The user can access their saved wines (those from external API and those created by user) in their wine cellar. Users can add ratings and notes to their wines and edit as they need. Meal Pairings show on the wine show page. 

#### Created By: Kelly Hodges
##### April 2022

### Deployed [Pour Pair](https://pour-pair.herokuapp.com/)

## User Flow: 
![alt text](https://i.imgur.com/pOA43D9.png "Pour Pair User Flow")

## Tech Stack: MERN
### Front-End: React.js
### [Back-End](https://github.com/khodgesx/wine-pair-back/blob/main/README.md) : MongoDB, Express.js, Node.js



### API
- Spoonacular - pairing data and wine search data
- Cloudinary - photo upload and storage for wines and users

## MVP:
- A working full-stack application built using MongoDB, Express.js, and Node.js for the back-end and React.js for the front-end
- Two models - user and wines
- User login functionality
- Be deployed online and accessible to the public via Heroku

### User Model: 
- displayName
- username
- password
- img
- faveWine
- wines

### Wines Model:
- type (red or white)
- varietal
- img
- mealPairs
- notes
- user
- apiId

## Stretch Goals:
- User can save information directly from API response 
- User can see other users, their profile pages, and their wine cellars

## Future Goals:
- Pagination for API wine response 
- Add more user to user interaction (saving others' wines, etc.)
- Better Styling


