// anik


const express = require('express');

const app = express();

app.use(express.json())


const database = require('./database');


let Customers =(req,res)=>{
    let query = "SELECT * FROM customer";
    database.query(query, function(error, data){
      res.json({
        data: data
      });
    });

}

let CustomersPost =(req,res)=>{

  console.log(req.body)
  const {id,name,phone,email,address,user_name,password}=req.body

  let query = `insert into customer (id,name,phone,email,address,user_name,password) values('${id}','${name}',"${phone}","${email}",'${address}','${user_name}','${password}')`;
  database.query(query, function(err, data){
    if (err) throw err;
    res.json({
      data: {
        message:"data inserted"
      }
    });
  });
}

let CustomersDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from customer where id = "${id}"`;
  database.query(query, function(err, data){
    if (err) throw err;
    res.json({
      data: {
        message:"data deleted"
      }
    });
  });
}






//////////////////////////////////

let Packages =(req,res)=>{
  var query = "SELECT * FROM package";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let packagesPost =(req,res)=>{

  console.log(req.body)
  const {id,name,Availability}=req.body

  let query = `insert into package (id,name,Availability) values('${id}','${name}','${Availability}')`;
  database.query(query, function(err, data){
    if (err) throw err;
    res.json({
      data: {
        message:"data inserted"
      }
    });
  });
}
let packagesDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from package where id = "${id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}
////////////////////////////////////

let Locations =(req,res)=>{
  var query = "SELECT * FROM location";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let locationsDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from location where id = "${id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}

/////////////////////////////
let Employees =(req,res)=>{
  var query = "SELECT * FROM employee";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let employeesDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from  employee where id = "${id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}
////////////////////////////////////////

let locationsPost =(req,res)=>{
  const {Id, Name, Description, Types}=req.body

  let query = `insert into location (Id, Name, Description, Types) 
  values('${Id}', '${Name}', '${Description}', '${Types}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}




let employeesPost =(req,res)=>{
  
  const {Id, User_name, Password, Phone, Hour_work, Joining_date, Leaving_date, Salary_per_hour, Etype}=req.body

  let query = `insert into employee (Id, User_name, Password, Phone, Hour_work, Joining_date, Leaving_date, Salary_per_hour, Etype) 
  values('${Id}', '${User_name}', '${Password}', '${Phone}', '${Hour_work}', '${Joining_date}', '${Leaving_date}',' ${Salary_per_hour}','${Etype}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}


//////////////////////////

let Receipts =(req,res)=>{
  var query = "SELECT * FROM receipt";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let receiptsPost =(req,res)=>{
  const {Receipt_id, Pid, Cid, Date, Paid_unpaid}=req.body

  let query = `insert into receipt (Receipt_id, Pid, Cid, Date, Paid_unpaid) 
  values('${Receipt_id}', '${Pid}', '${Cid}', '${Date}', '${Paid_unpaid}')`;


database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}
let receiptsDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from  receipt where Receipt_id = "${id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}


/////////////////////////////////////

let CustBuys =(req,res)=>{
  var query = "SELECT * FROM custbuy";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}

let custbuysPost =(req,res)=>{
  const {Cid, Pid, Start_date, End_date}=req.body

  let query = `insert into custbuy (Cid, Pid, Start_date, End_date) 
  values('${Cid}', '${Pid}',' ${Start_date}', '${End_date}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}


let custbuysDelete = (req,res)=>{


  const {Cid,Pid} =req.params

   let query = `delete from   custbuy where cid = "${cid}"  and Pid = "${Pid}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}
/////////////////////////
let PackageHas =(req,res)=>{
  var query = "SELECT * FROM package_has";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let package_hasPost =(req,res)=>{
  const {Lid, Pid}=req.body

  let query = `insert into package_has(Lid, Pid) 
  values('${Lid}', '${Pid}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}

let package_hasDelete = (req,res)=>{


  const {lid,pid} =req.params

   let query = `delete from   package_has where Lid = "${Lid}"  and Pid = "${Pid}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}

/////////////////
let EworksIn =(req,res)=>{
  var query = "SELECT * FROM Eworksin";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let EworksinDelete = (req,res)=>{


  const {lid,emp_id} =req.params

  let query = `delete from   Eworksin  where lid = "${lid}"  and  emp_id = "${emp_id}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}
let EworksinPost =(req,res)=>{
  const {Lid, Emp_id, Date, Wage}=req.body

  let query = `insert into Eworksin(Lid, Emp_id, Date, Wage) 
  values('${Lid}', '${Emp_id}', '${Date}', '${Wage}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}


//////////////////
let Vehicles =(req,res)=>{
  var query = "SELECT * FROM vehicle";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let VehiclesPost =(req,res)=>{

  console.log(req.body)
  const {License,Pid,Price,Vtype,Date}=req.body

  let query = `insert into vehicle (License,Pid,Price,Vtype,date) values('${License}','${Pid}','${Price}','${Vtype}','${Date}')`;
  database.query(query, function(err, data){
    if (err) throw err;
    res.json({
      data: {
        message:"data inserted"
      }
    });
  });
}
let VehiclesDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from   vehicle  where License = "${id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}


///////////////////

let Dependents =(req,res)=>{
  var query = "SELECT * FROM dependent";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let dependentsPost =(req,res)=>{
  const {Cid, Dname, Age, Number}=req.body

  let query = `insert into dependent(Cid, Dname, Age, Number) 
  values('${Cid}', '${Dname}', '${Age}', '${Number}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}

let dependentsDelete = (req,res)=>{


  const {cid,Dname} =req.params

   let query = `delete from   dependent where cid = "${cid}"  and Dname = "${Dname}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}
////////////////////////////

let Drives =(req,res)=>{
  var query = "SELECT * FROM drive";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let DrivePost =(req,res)=>{


  const {emp_id,Vlicense,Date}=req.body
  console.log(req.body)
  let query = `insert into drive (emp_id,Vlicense,Date) values('${emp_id}','${Vlicense}','${Date}')`;
  database.query(query, function(err, data){
    if (err) throw err;
    res.json({
      data: {
        message:"data inserted"
      }
    });
  });
}
let DriveDelete = (req,res)=>{


  const {emp_id,Vlicense} =req.params

   let query = `delete from   drive where emp_id = "${emp_id}"  and Vlicense = "${Vlicense}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}


////////////////////////////////////////
let Acco =(req,res)=>{
  var query = "SELECT * FROM accommodation";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let accommodationsPost =(req,res)=>{
  const {Id, Lid, Name, Contact, Price}=req.body

  let query = `insert into accommodation(Id, Lid, Name, Contact, Price) 
  values('${Id}', '${Lid}', '${Name}', '${Contact}', '${Price}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}

let accommodationsDelete = (req,res)=>{


  const {id} =req.params

  let query = `delete from   accommodation  where id = "$id}"`;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}

////////////////////////////////////////

let AccBelongTo =(req,res)=>{
  var query = "SELECT * FROM accommodation";
  database.query(query, function(error, data){
    res.json({
      data: data
    });
  });

}
let Acc_belongsToPost =(req,res)=>{
  const {Aid, Pid}=req.body

  let query = `insert into Acc_belongsTo(Aid, Pid) 
  values('${Aid}', '${Lid}')`;

database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data inserted"
  	}
	});
  });
}

let Acc_belongsToDelete = (req,res)=>{


  const {aid,pid} =req.params

   let query = `delete from   Acc_belongsTo where aid = "${aid}"  and pid = "${pid}" `;
  database.query(query, function(err, data){
	if (err) throw err;
	res.json({
  	data: {
    	message:"data deleted"
  	}
	});
  });
}






// ////////////////////////////////////

app.get('/customers',Customers)
app.post('/customers',CustomersPost)
app.delete('/customers/:id',CustomersDelete) //done




app.get('/packages',Packages)
app.post('/packages',packagesPost)
app.delete('/packages/:id',packagesDelete)



app.get('/locations',Locations)
app.post('/locations',locationsPost )
app.delete('/locations/:id',locationsDelete )




app.get('/employees',Employees)
app.post('/employees',employeesPost)
app.delete('/employees/:id',employeesDelete )




app.get('/receipts',Receipts)
app.post('/receipts',receiptsPost)
app.delete('/receipts/:id',receiptsDelete)


app.get('/eworksin',EworksIn)
app.post('/eworksin', EworksinPost)
app.delete('/eworksin/:id1/:id2',EworksinDelete )//done



app.get('/vehicles',Vehicles)
app.post('/vehicles',VehiclesPost)
app.delete('/vehicles/:id',VehiclesDelete )//done


app.get('/dependents',Dependents)
app.post('/dependents',dependentsPost)
app.delete('/dependents/:id1/:id2',dependentsDelete )


app.get('/custbuys',CustBuys)
app.post('/custbuys',custbuysPost)
app.delete('/custbuys/:id1/:id2',custbuysDelete )


app.get('/package_has',PackageHas)
app.post('/package_has',package_hasPost)
app.delete('/package_has/:id1/:id2',package_hasDelete )



app.get('/drives',Drives)
app.post('/drives',DrivePost)
app.delete('/drives/:id1/:id2',DriveDelete )



app.get('/accommodations',Acco)
app.post('/accommodations',accommodationsPost)
app.delete('/accommodations/:id',accommodationsDelete )


app.get('/accBelongTo',AccBelongTo)
app.post('/accBelongTo',Acc_belongsToPost)
app.delete('/accBelongTo/:id1/:id2',Acc_belongsToDelete)






const port = 3000;
app.listen(port,()=>{
  console.log(`App running on port ${port}...`)
});






// done
// app.get('/customers',Customers)
// app.post('/customers',CustomersPost)
// app.delete('/customers/:id',CustomersDelete)



// // done
// app.get('/packages',Packages)
// app.post('/packages',packagesPost)


// // Done
// app.get('/locations',Locations)
// app.post('/locations',locationsPost )



// // Done
// app.get('/employees',Employees)
// app.post('/employees',employeesPost)



// // Done
// app.get('/receipts',Receipts)
// app.post('/receipts',receiptsPost)

// app.get('/custbuys',CustBuys)
// app.get('/package_has',PackageHas)
// app.get('/eworksin',EworksIn)

// // Done
// app.get('/vehicles',Vehicles)
// app.post('/vehicles',VehiclesPost)
// app.get('/dependents',Dependents)

// // Done
// app.get('/drives',Drives)
// app.post('/drives',DrivePost)

// app.get('/accommodations',Acco)
// app.get('/accBelongTo',AccBelongTo)

//hello everyone