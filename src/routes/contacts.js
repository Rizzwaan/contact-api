const router = require('express').Router();

// get all conatcts
router.get('/', (req,res) => {
    res.status(200).json({
        message:'Get all the Contacts'
    })
});

//get contact with specific Id
router.get('/:id', (req,res) => {
    res.status(200).json({
        message:'Get specific contact with id',
        contact_id: req.params.id
    });
});

//create a new contact
router.post('/', (req,res) => {
    res.status(201).json({
        message: 'created a new contact'
    });
});

//partially update
router.patch('/:id', (req,res) => {
    res.status(201).json({
        message: 'partially updates a contact with specfic id',
        contact_id: req.params.id
    });
});

//completely upadate (create new and repalce the old)
router.put('/:id', (req,res) => {
    res.status(201).json({
        message: 'completely updates a contact with specfic id',
        contact_id: req.params.id
    });
});

//delete
router.delete('/:id', (req,res) => {
    res.status(201).json({
        message: 'delete\'s a contact with specfic id',
        contact_id: req.params.id
    });
});

module.exports = router;