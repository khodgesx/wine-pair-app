# wine-pair
Wine pair will use an API to find wines to pair with your meals or vice versa. Search wine by main ingredient to find a suggested wine or search by wine varietal to get suggested meal pairings. The user can further search for different wines matching the suggested varietal. The user will have a list of saved wines that they can add to. This will include wines they had and what they paired it with and any notes they want to add about the wine and/or pairing. 

## Tech Stack: MERN
### Front-End: React.js
### [Back-End](https://github.com/khodgesx/wine-pair-back/blob/main/README.md) : MongoDB, Express.js, Node.js



### API
- Spoonacular 
- Cloudinary

## MVP:
- A working full-stack application built using MongoDB, Express.js, and Node.js for the back-end and React.js for the front-end
- Two models - user and wines
- User login functionality
- Be deployed online and accessible to the public via Heroku

### User Model: 
- displayName
- username
- password
- wines

### Wines Model:
- type (red or white)
- varietal
- img
- mealPairs
- notes
- user

## Stretch Goals:
- User can save information directly from API response 



