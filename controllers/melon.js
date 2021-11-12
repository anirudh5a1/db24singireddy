var Melon = require("../models/melon");

// for a specific melon.
exports.melon_detail = async function (req, res) {
  console.log("detail"  + req.params.id) 
    try { 
        result = await Melon.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle melon create on POST.
exports.melon_create_post = async function (req, res) {
  let document = new Melon();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.Brand = req.body.Brand;
  document.size = req.body.size;
  document.price = req.body.price;
  console.log(req.body);
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle melon delete form on DELETE.
exports.melon_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: melon delete DELETE " + req.params.id);
};

// Handle melon update form on PUT.
exports.melon_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Melon.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Brand)  
               toUpdate.Brand = req.body.Brand; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// List of all melons
exports.melon_list = async function (req, res) {
  try {
    themelons = await Melon.find();
    res.send(themelons);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// VIEWS
// Handle a show all view
exports.melon_view_all_Page = async function(req, res) { 
  try{ 
      themelons = await Melon.find(); 
      res.render('melon', { title: 'Melon Search Results', results: themelons }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 