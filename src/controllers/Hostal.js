import HostalModel from '../../models/Hostal';
import fs from 'fs';
import util from 'util';

//TODO Agregar atributo para los comentarios
//TODO Agregar atributo para las fotos, tiene que ser los path a las imagenes
const Hostal = {

  create(req, res) {
    const hostal = HostalModel.create(req.body);
    fs.appendFileSync("./JSON/hostals.json", util.inspect(hostal) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(201).send(hostal);
  },

  getAll(req, res) {
    const hostals = HostalModel.findAll();
    fs.appendFileSync("./JSON/hostals.json", util.inspect(hostals) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(hostals);
  },

  getOne(req, res) {
    const hostal = HostalModel.findOne(req.params.id);
    if (!hostal) {
      return res.status(404).send({ 'message': 'hostal not found' });
    }
    fs.appendFileSync("./JSON/hostals.json", util.inspect(hostal) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(hostal);
  },

  update(req, res) {
    const hostal = HostalModel.findOne(req.params.id);
    if (!hostal) {
      return res.status(404).send({ 'message': 'hostal not found' });
    }
    const updateHostal = HostalModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSON/hostals.json", util.inspect(updateHostal) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(updateHostal);
  },

  delete(req, res) {
    const hostal = HostalModel.findOne(req.params.id);
    if (!hostal) {
      return res.status(404).send({ 'message': 'hostal not found' });
    }
    fs.appendFileSync("./JSON/hostals.json", util.inspect(hostal) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    const ref = HostalModel.delete(req.params.id);
    return res.status(204).send(ref);
  },

  getAllByCity(req, res){
    const hostales = HostalModel.findAllByCity(req.params.city);
    if(!hostales){
      return res.status(404).send({'message': 'hostales no found'});
    }
    return res.status(200).send(hostales);
  }
}

export default Hostal;