import express from 'express';
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var Feature = require('./feature');
var router = express.Router();

// get all
router.get('/', function (req, res) {
    Feature.find({}, function (err: any, feature: any) {
        if (err) {
            return res.status(500).send("No feature found!");
        }
        res.status(200)
        res.send(feature);
    });
});

// get feature with id
router.get('/:id', function (req, res) {
    Feature.findById(req.params.id, function (err: any, feature: any) {
        if (err)  {
            return res.status(500).send("There was a problem finding the feature.");
        }
        if (!feature) { 
            return res.status(404).send("No feature found.");
        }
        res.status(200).send(feature);
    });
});

// create feature
router.post('/', function (req, res) {
    Feature.create({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            createdTS: req.body.createdTS,
            version: req.body.version,
            owner: req.body.owner,
            data: req.body.data
        }, 
        function (err: any, feature: any) {
            if (err) 
                return res.status(500).send("Error in getting feature!");
            res.status(200).send(feature);
        });
});

// delete feature
router.delete('/:id', function (req, res) {
    Feature.findByIdAndRemove(req.params.id, function (err: any, feature: any) {
        if (err) {
            return res.status(500).send("Error in deleting feature!");
        }
        res.status(200).send(feature.name +" deleted successfully!");
    });
});

// update feature with id
router.put('/:id', function (req, res) {
    Feature.findByIdAndUpdate(req.params.id, req.body, function (err: any, feature: any) {
        if (err) {
            return res.status(500).send("There was a problem updating the feature.");
        }
        res.status(200).send(feature);
    });
});


app.listen(7000, () => {
    console.log(`server is running!`);
});


// router.get("/", (req: any, res: any) => {
//     res.send("middleware in action");
// });