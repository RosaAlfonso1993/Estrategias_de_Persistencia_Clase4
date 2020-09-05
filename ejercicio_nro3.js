const Sequelize = require('sequelize');
const { userInfo } = require('os');

const sequelize = new Sequelize('clase_3', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  class Cars extends Sequelize.
  Model{}
  Cars.init({
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      years: Sequelize.TINYINT
  },{sequelize,modelName: "users"})

  //Insertar datos
  sequelize.sync()
    .then(()=> Cars.create({
        firstName: "Ramona",
        lastName: "Montenegro",
        years: 26
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

    //Actualizar datos
    Cars.update({ firstName: "Fabian"},
        {
            where:{
                lastName: "Veizaga"
        }
    }).then(()=> {
        console.log("Done")
    })

    //Actualizar datos
    Cars.update({ firstName: "Estela Mercedez"},
        {
            where:{
                lastName: "Solis"
        }
    }).then(()=> {
        console.log("Done")
    })