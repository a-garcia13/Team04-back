// server.js
import express from 'express';
import User from './src/controllers/User';
import Empresa from './src/controllers/Empresa';
import ServicioT from './src/controllers/ServicioT';
import ServicioA from './src/controllers/ServicioA';
import ServicioM from './src/controllers/ServicioM';
import Location from './src/controllers/Location';
import Hostal from './src/controllers/Hostal';
import Viaje from './src/controllers/Viaje';
import Transportes from './src/controllers/Transportes';
import Multitravel from './src/controllers/Multitravel';
import cors from 'cors';



const app = express()
app.use(cors());

app.use(express.json())

/*
--------------------------------USUARIOS--------------------------------------
*/
app.post('/users', User.create);
app.get('/users', User.getAll);
app.get('/users/:id', User.getOne);
app.put('/users/:id', User.update);
app.delete('/users/:id', User.delete);
/*
--------------------------------LOCALIZACIONES--------------------------------------
*/
app.post('/locations', Location.create);
app.get('/locations', Location.getAll);
app.get('/locations/:nombre', Location.getOne);
app.put('/locations/:nombre', Location.update);
app.delete('/locations/:nombre', Location.delete);
/*
--------------------------------ACTIVIDADES--------------------------------------
*/
app.post('/locations/:nombre/activities', Location.createActivities);
app.get('/locations/:nombre/activities', Location.getAllActivities);
app.get('/locations/:nombre/activities/:nombreActivity', Location.getOneActivity);
app.put('/locations/:nombre/activities/:nombreActivity', Location.updateActivity);
/*
--------------------------------EMPRESAS--------------------------------------
*/
app.post('/empresas', Empresa.create);
app.get('/empresas', Empresa.getAll);
app.get('/empresas/:id', Empresa.getOne);
app.put('/empresas/:id', Empresa.update);
app.delete('/empresas/:id', Empresa.delete);

/*
--------------------------------SERVICIOS TERRESTRES--------------------------------------
*/
app.post('/serviciost', ServicioT.create);
app.get('/serviciost', ServicioT.getAll);
app.get('/serviciost/:id', ServicioT.getOne);
app.put('/serviciost/:id', ServicioT.update);
app.delete('/serviciost/:id', ServicioT.delete);

/*
--------------------------------SERVICIOS AEREOS--------------------------------------
*/
app.post('/serviciosa', ServicioA.create);
app.get('/serviciosa', ServicioA.getAll);
app.get('/serviciosa/:id', ServicioA.getOne);
app.put('/serviciosa/:id', ServicioA.update);
app.delete('/serviciosa/:id', ServicioA.delete);

/*
--------------------------------SERVICIOS MARITIMOS--------------------------------------
*/
app.post('/serviciosm', ServicioM.create);
app.get('/serviciosm', ServicioM.getAll);
app.get('/serviciosm/:id', ServicioM.getOne);
app.put('/serviciosm/:id', ServicioM.update);
app.delete('/serviciosm/:id', ServicioM.delete);

/*
--------------------------------HOSTALES--------------------------------------
*/
app.post('/hostales', Hostal.create);
app.get('/hostales', Hostal.getAll);
app.get('/hostales/:id', Hostal.getOne);
app.put('/hostales/:id', Hostal.update);
app.delete('/hostales/:id', Hostal.delete);
app.get('/hostales/cities/:city',Hostal.getAllByCity);

/*
--------------------------------VIAJES--------------------------------------
*/
app.post('/viajes', Viaje.create);
app.get('/viajes', Viaje.getAll);
app.get('/viajes/:id', Viaje.getOne);
app.put('/viajes/:id', Viaje.update);
app.delete('/viajes/:id', Viaje.delete);


/*
--------------------------------OBTENER TODOS LOS TRANSPORTES--------------------------------------
*/
app.get('/transportes',Transportes.getAll);

/*
--------------------------------OBTENER DATOS VIAJES--------------------------------------
*/
app.get('/datosHistoricos', Multitravel.getData);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Viajes back Team-04'});
})

app.listen(process.env.PORT || 3001, function(){
  console.log('Your node js server is running in port', 3001);
});
