import uuid from 'uuid';

class ServicioT {

  constructor() {
    this.serviciosT = [];
  }
  

  create(data) {
    const newServicioT = {
      id: uuid.v4(),
      nombreEmpresa: data.nombreEmpresa || '',
      rutas: data.rutas || '',
      origen: data.origen || '',
      destino: data.destino || ''
    };
    this.serviciosT.push(newServicioT);
    return newServicioT
  }

  findOne(id) {
    return this.serviciosT.find(servicioT => servicioT.id === id);
  }

  findAll() {
    return this.serviciosT;
  }

  update(id, data) {
    const servicioT = this.findOne(id);
    const index = this.serviciosT.indexOf(servicioT);
    this.serviciosT[index].nombreEmpresa = data['nombreEmpresa'] || servicioT.nombreEmpresa;
    this.serviciosT[index].rutas = data['rutas'] || servicioT.rutas;
    this.serviciosT[index].origen = data['origen'] || servicioT.origen;
    this.serviciosT[index].destino = data['destino'] || servicioT.destino;
    return this.serviciosT[index];
  }

  delete(id) {
    const servicioT = this.findOne(id);
    const index = this.serviciosT.indexOf(servicioT);
    this.serviciosT.splice(index, 1);
    return {};
  }
}
export default new ServicioT();
