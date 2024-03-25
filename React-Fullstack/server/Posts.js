module.exports = (seuelize,DataTypes) => {
    const Posts = sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    });
    return Posts;
};