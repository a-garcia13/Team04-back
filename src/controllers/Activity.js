import ActivityModel from '../../models/Activity';

const Activity ={
    create(req, res){
        if(!req.body.nombre && !req.body.descripcion && !req.body.fechaInicio && !req.body.fechaFin && !req.body.puntuacion){
            return res.status(400).send({'message': 'All fields are required'})
        }
        const activity = ActivityModel.create(req.body);
        if(activity.error != undefined){
            return res.status(202).send({'message': 'An activity with that name already exist'})
        }
        return res.status(201).send(activity);
    },
    getAll(req, res){
        const activities = ActivityModel.findAll();
        return res.status(200).send(activities);
    },
    getOne(req, res){
        const activity = ActivityModel.findOne(req.params.nombre);
        if (!activity) {
            return res.status(404).send({'message': 'activity not found'});
        }
        return res.status(200).send(activity);
    },
    update(req, res) {
        const activity = ActivityModel.findOne(req.params.nombre);
        if (!activity) {
            return res.status(404).send({'message': 'activity not found'});
        }
        const updatedActivity = ActivityModel.update(req.params.nombre, req.body);
        return res.status(200).send(updatedActivity);
    },
    delete(req, res) {
        const activity = ActivityModel.findOne(req.params.nombre);
        if (!activity) {
            return res.status(404).send({'message': 'activity not found'});
        }
        const deletedActivity = ActivityModel.delete(req.params.nombre);
        return res.status(204).send({'message': 'activity deleted'});
    }
}

export default Activity;