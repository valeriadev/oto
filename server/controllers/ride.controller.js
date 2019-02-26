const validator = require("email-validator");
const rideService = require("../services/ride.service");
const rideViewModel = require("../viewmodel/ride");
const querystring = require('querystring');
const url = require('url');

async function createRide(req, res) {
    //const { email, password } = req.body;

    /*if (!(validateEmail(email) && validatePassword(password))) {
        res.status(400).json({ error: 'Request is not valid' });
    }*/

    try {
        const newRide = await rideService.createRide(req.body);
        res.status(200).json({ ride: rideViewModel(newRide) });
    } catch (e) {
        console.error('Failed to create ride: ' + e.stack);
        res.status(500).json({ error: 'Cannot create ride' });
    }

}

async function updateRide(req, res){
    const token = req.headers['x-oto-token'];
    try{
        const rideUpdate = await rideService.updateRide(token, req.body);
        res.status(200).json({user: rideViewModel(rideUpdate)});
    }catch(e){
        console.error('Failed to update ride: '+ e);
        res.status(500).json({ error: 'Can not update ride' });
    }
}

async function deleteRide(req,res){
    try{
         const rideDelete = await rideService.deleteRide(req.query.id);
         res.status(200).json({ride: rideViewModel(rideDelete)});
    }catch(e){
        console.error('Failed to delete ride: '+ e);
        res.status(500).json({ error: 'Can not delete ride'});
    }
}

async function search(req, res){
try{ 
    const query = req.query;
    const rideSearch = await rideService.search(query)
    res.status(200).json(rideSearch);
}catch(e){
    console.error('Failed to search: '+ e);
    res.status(500).json({ error: 'Can not search'});  
}

}
module.exports = {
    createRide,
    updateRide,
    deleteRide,
    search
}