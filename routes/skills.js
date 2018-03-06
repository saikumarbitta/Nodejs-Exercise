
/*
 * GET skills.
 */

exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM skills',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
              res.status(200).send(rows);                
           
         });

    });
  
};



/*Save the skill*/
exports.add = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            status : input.status 
        
        };
        
        var query = connection.query("INSERT INTO skills set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.status(200).send("Inseted Successfully");
          
        });
         
    });
};

//Search the skill

exports.search = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
           
        var query = connection.query("SELECT * FROM skills WHERE name LIKE '%"+req.body.search+"%'", function(err, rows)
        {
  
          if (err)
              console.log("Error searching : %s ",err );
         
          res.status(200).send(rows);
          
        });
        
    });
};

// Edit the skill

exports.edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name
        
        };
        
        connection.query("UPDATE skills set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.status(200).send("Updated Successfully");
          
        });
    
    });
};

//Edit the status of skill

exports.status = function(req,res){
      var input = JSON.parse(JSON.stringify(req.body));
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        var data = {
            
            status    : input.status
        
        };

        connection.query("UPDATE skills set ? WHERE id = ? ",[data,id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
        res.status(200).send("Status Updated Successfully");             
        });
        
     });
};


