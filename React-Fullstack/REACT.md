$ npm init

$ npm install express cors mysql2

> node index.js


$ npm install nodemon
package.json
    "start": "nodemon index.js" 추가(코마찍어주고)
  },

$ npm start

MySql workbench 데이터베이스 생성

react-fullstack
    $ npm install sequelize sequelize-cli

server
    $ sequelize init
        migrations 
        seeders
Models
    post.js
        nodule.exports = (sequelize,DataTypes) => {
            const Posts = sequelize.define("Posts",{
                
            })
        }

        return Posts 
