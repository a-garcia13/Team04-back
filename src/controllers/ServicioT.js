import ServicioTModel from '../../models/ServicioT';
import fs from 'fs';
import util from 'util'

const ServicioT = {

  create(req, res) {
    const servicio = ServicioTModel.create(req.body);
    fs.appendFileSync("./JSON/serviciosTerrestres.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(201).send(servicio);
  },

  getAll(req, res) {
    const servicio = ServicioTModel.findAll();
    fs.appendFileSync("./JSON/serviciosTerrestres.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },
  
  getOne(req, res) {
    const servicio= ServicioTModel.findOne(req.params.id);
    if (!servicio){
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosTerrestres.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },

  update(req, res) {
    const servicio= ServicioTModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    const updatedservicio= ServicioTModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSON/serviciosTerrestres.json",util.inspect(updatedservicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(updatedservicio);
  },

  delete(req, res) {
    const servicio= ServicioTModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosTerrestres.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    const ref = ServicioTModel.delete(req.params.id);

    return res.status(204).send(ref);
  }
}

export default ServicioT;