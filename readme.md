This is a nodejs and angularjs project which can 
    a. Skill Listing
    b. Skill search (searching a skill)
    c. Add skill
    d. Edit skill
    e. Change status of skill (approve/reject)

Installation:

Clone or download zip to your machine,move to that path then hit this :

npm install

Configuration (database):

app.js

    host: 'localhost',
    user: 'root',
    password : 'root',
    port : 3306, //port mysql
    database:'Skills'	

You need to create a DB named 'Skills' and import skills.sql in the DB.
(Make sure you use the username and password of your mysql server in app.js).

After that use the following command:
 
node app

Move to the browser and open localhost:4000 to see the app working.
