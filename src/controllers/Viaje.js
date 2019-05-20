import ViajeModel from '../../models/Viaje';
import fs from 'fs';
import util from 'util';

const Viaje = {

  create(req, res) {
    const viaje = ViajeModel.create(req.body);
    fs.appendFileSync("./JSON/viajes.json", util.inspect(viaje) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(201).send(viaje);
  },

  getAll(req, res) {
    const viajes = ViajeModel.findAll();
    fs.appendFileSync("./JSON/viajes.json", util.inspect(viajes) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(viajes);
  },

  getOne(req, res) {
    const viaje = ViajeModel.findOne(req.params.id);
    if (!viaje) {
      return res.status(404).send({ 'message': 'viaje not found' });
    }
    fs.appendFileSync("./JSON/viajes.json", util.inspect(viaje) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(viaje);
  },

  update(req, res) {
    const viaje = ViajeModel.findOne(req.params.id);
    if (!viaje) {
      return res.status(404).send({ 'message': 'viaje not found' });
    }
    const updatedViaje = ViajeModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSON/viajes.json", util.inspect(updatedViaje) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    return res.status(200).send(updatedViaje);
  },

  delete(req, res) {
    const viaje = ViajeModel.findOne(req.params.id);
    if (!viaje) {
      return res.status(404).send({ 'message': 'viaje not found' });
    }
    fs.appendFileSync("./JSON/viajes.json", util.inspect(viaje) + "\r\n", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    const ref = ViajeModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Viaje;