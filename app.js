// anik

const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(express.json());
// app.use(function(req,res,next){
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE');
//   res.header('Access-Control-Allow-Headers','Content-Type');

// })
app.use(cors(corsOptions));

const database = require('./database');

let Customers = (req, res) => {
  let { id } = req.params;
  if (id) {
    let query = `SELECT * FROM customer where id = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query = 'SELECT * FROM customer';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};
let Authenticate = (req, res) => {
  const { Id, Password } = req.params;
  console.log(Id, Password);
  let query = `SELECT * FROM employee where id='${Id}' and password='${Password}'`;
  console.log(query);
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let Authenticate2 = (req, res) => {
  const { Id, Password } = req.params;
  console.log(Id, Password);
  let query = `SELECT * FROM customer where id='${Id}' and password='${Password}'`;
  // let query = "SELECT * FROM customer";
  console.log(query);
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let CustomersPost = (req, res) => {
  console.log(req.body);
  const { Id, Name, Phone, Email, Address, User_name, Password } = req.body;

  let query = `insert into customer (id,name,phone,email,address,user_name,password) values('${Id}','${Name}',"${Phone}","${Email}",'${Address}','${User_name}','${Password}')`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let CustomersDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from customer where id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

let CustomersPatch = (req, res) => {
  const { id } = req.params;
  const { password, phone } = req.body;

  let query = `UPDATE customer
  SET password= '${password}', phone='${phone}'
  WHERE id = '${id}'`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data updated',
      },
    });
  });
};

//////////////////////////////////

let Packages = (req, res) => {
  var query = 'SELECT * FROM package';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let PackagesPatch = (req, res) => {
  console.log(req.body, req.params);
  const { id } = req.params;
  const { Name, Availability } = req.body;

  let query = `UPDATE package
  SET name= '${Name}', availability='${Availability}'
  WHERE id = '${id}'`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: query,
      },
    });
  });
};

let packagesPost = (req, res) => {
  console.log(req.body);
  const { Id, Name, Availability } = req.body;

  let query = `insert into package (id,name,Availability) values('${Id}','${Name}','${Availability}')`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};
let packagesDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from package where id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
////////////////////////////////////

let Locations = (req, res) => {
  var query = 'SELECT * FROM location';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let locationsDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from location where id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

/////////////////////////////
let Employees = (req, res) => {
  // var query = 'SELECT * FROM employee';
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  let { id } = req.params;
  if (id) {
    let query = `SELECT * FROM employee where id = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query = 'SELECT * FROM employee';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};

let employeesDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from  employee where id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
////////////////////////////////////////

let locationsPost = (req, res) => {
  console.log(req.body);
  const { Id, Name, Description, Types } = req.body;

  let query = `insert into location (Id, Name, Description, Types) 
  values('${Id}', '${Name}', '${Description}', '${Types}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let employeesPost = (req, res) => {
  console.log(req.body, 'sdfsdf');

  const {
    Id,
    User_name,
    Password,
    Phone,
    Hour_work,
    Joining_date,
    Leaving_date,
    Salary_per_hour,
    Etype,
  } = req.body;
  let p1 = Number(Phone);
  let p2 = Number(Hour_work);
  let p3 = Number(Salary_per_hour);
  console.log(p1, p2, p3);

  let query = `insert into employee (Id, User_name, Password, Phone, Hour_work, Joining_date, Leaving_date, Salary_per_hour, Etype) 
  values('${Id}', '${User_name}', '${Password}', '${p1}', '${p2}', '${Joining_date}', '${Leaving_date}','${p3}','${Etype}')`;
  console.log(query);
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

//////////////////////////

let Receipts = (req, res) => {
  var query = 'SELECT * FROM receipt';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let receiptsPost = (req, res) => {
  const { Receipt_id, Pid, Cid, Date, Paid_unpaid } = req.body;

  let query = `insert into receipt (Receipt_id, Pid, Cid, Date, Paid_unpaid) 
  values('${Receipt_id}', '${Pid}', '${Cid}', '${Date}', '${Paid_unpaid}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};
let receiptsDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from  receipt where Receipt_id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

/////////////////////////////////////

let CustBuys = (req, res) => {
  var query = 'SELECT * FROM custbuy';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let custbuysPost = (req, res) => {
  const { Cid, Pid, Start_date, End_date } = req.body;

  let query = `insert into custbuy (Cid, Pid, Start_date, End_date) 
  values('${Cid}', '${Pid}',' ${Start_date}', '${End_date}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let custbuysDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   custbuy where cid = "${id1}"  and Pid = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
/////////////////////////
let PackageHas = (req, res) => {
  var query = 'SELECT * FROM package_has';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let package_hasPost = (req, res) => {
  const { Lid, Pid } = req.body;

  let query = `insert into package_has(Lid, Pid) 
  values('${Lid}', '${Pid}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let package_hasDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   package_has where Lid = "${id1}"  and Pid = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

/////////////////
let EworksIn = (req, res) => {
  // Select ew.lid, l.name as Lname,ew.emp_id, e.name as Ename from employee e, location l, eworksin ew where ew.lid=l.id and ew.emp_id=e.id
  // var query = "SELECT * FROM Eworksin";
  var query =
    'Select ew.lid, l.name as Lname,ew.emp_id, e.user_name as Ename from employee e, location l, eworksin ew where ew.lid=l.id and ew.emp_id=e.id';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let EworksinPatch = (req, res) => {
  const { id1, id2 } = req.params;
  const { Lid, Date, Wage } = req.body;
  let query = `update eworksin Set lid='${Lid}', date='${Date}',wage=${Wage}
  Where emp_id='${id2}' and lid='${id1}' `;

  // let query = `delete from   Eworksin  where lid = "${id1}"  and  emp_id = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: query,
      },
    });
  });
};
let EworksinDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   Eworksin  where lid = "${id1}"  and  emp_id = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
let EworksinPost = (req, res) => {
  const { Lid, Emp_id, Date, Wage } = req.body;

  let query = `insert into Eworksin(Lid, Emp_id, Date, Wage) 
  values('${Lid}', '${Emp_id}', '${Date}', '${Wage}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

//////////////////
let Vehicles = (req, res) => {
  var query = 'SELECT * FROM vehicle';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let VehiclesPost = (req, res) => {
  console.log(req.body);
  const { License, Pid, Price, Vtype, Date } = req.body;

  let query = `insert into vehicle (License,Pid,Price,Vtype,date) values('${License}','${Pid}','${Price}','${Vtype}','${Date}')`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};
let VehiclesDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from   vehicle  where License = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

///////////////////

let Dependents = (req, res) => {
  var query = 'SELECT * FROM dependent';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let dependentsPost = (req, res) => {
  const { Cid, Dname, Age, Number } = req.body;

  let query = `insert into dependent(Cid, Dname, Age, Number) 
  values('${Cid}', '${Dname}', '${Age}', '${Number}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let dependentsDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   dependent where cid = "${id1}"  and Dname = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
////////////////////////////

let Drives = (req, res) => {
  var query1 = 'SELECT * FROM drive';
  var query =
    'SELECT d.emp_id, e.user_name ,d.vlicense ,d.date FROM drive d, employee e where e.id=d.emp_id';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let DrivePost = (req, res) => {
  const { Emp_id, Vlicense, Date } = req.body;
  console.log(req.body);
  let query = `insert into drive (emp_id,Vlicense,Date) values('${Emp_id}','${Vlicense}','${Date}')`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};
let DriveDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   drive where emp_id = "${id1}"  and Vlicense = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

////////////////////////////////////////
let Acco = (req, res) => {
  var query = 'SELECT * FROM accommodation';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let accommodationsPost = (req, res) => {
  const { Id, Lid, Name, Contact, Price } = req.body;

  let query = `insert into accommodation(Id, Lid, Name, Contact, Price) 
  values('${Id}', '${Lid}', '${Name}', '${Contact}', '${Price}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let accommodationsDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from   accommodation  where id = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

let accommodationsPatch = (req, res) => {
  const { id } = req.params;
  const { Name, Contact, Price } = req.body;

  let query = `UPDATE accommodation
  SET Name= '${Name}', Contact='${Contact}', Price='${Price}'
  WHERE Id = '${id}'`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data updated',
      },
    });
  });
};

////////////////////////////////////////

let AccBelongTo = (req, res) => {
  // select ab.aid,ac.name,ab.pid,p.name from acc_belongsto ab ,accommodation ac ,package p
  // where ab.aid = ac.id and ab.pid = p.id
  let query = `select ab.aid,ac.name as ACName,ab.pid,p.name as PName from acc_belongsto ab ,accommodation ac ,package p where ab.aid = ac.id and ab.pid = p.id`;
  // var query = "SELECT * FROM acc_belongsto";
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};
let Acc_belongsToPost = (req, res) => {
  const { Aid, Pid } = req.body;

  let query = `insert into Acc_belongsTo(Aid, Pid) 
  values('${Aid}', '${Pid}')`;

  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let Acc_belongsToDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   Acc_belongsTo where aid = "${id1}"  and pid = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};
/////////////////////////////////


let CusHire = (req, res) => {
  // var query = 'SELECT * FROM employee';
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  let { id } = req.params;
  if (id) {
    let query = `SELECT * FROM CusHire where Cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query = 'SELECT * FROM CusHire';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};

let CusHirePost = (req, res) => {
  const { cid, Vlicense } = req.body;
  console.log(req.body);
  let query = `insert into CusHire (cid, Vlicense) values('${cid}','${Vlicense}')`;
  console.log(query)
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let CusHireDelete = (req, res) => {
  const { id } = req.params;

  let query = `delete from  CusHire where Cid = "${id}"`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

// ////////////////////////////////////

app.get('/customers/:id?', Customers); //done
app.patch('/customers/:id', CustomersPatch); //done
app.post('/customers', CustomersPost); //done
app.delete('/customers/:id', CustomersDelete); //done

app.get('/packages', Packages); //done
app.patch('/packages/:id', PackagesPatch); //done
app.post('/packages', packagesPost); //done
app.delete('/packages/:id', packagesDelete); //done

app.get('/locations', Locations); //DOne
app.post('/locations', locationsPost); //Done
app.delete('/locations/:id', locationsDelete); //DOne

app.get('/employees/:id?', Employees); //Done
app.post('/employees', employeesPost); //Done
app.delete('/employees/:id', employeesDelete); //Done

app.get('/receipts', Receipts); //Done
app.post('/receipts', receiptsPost); //Done
app.delete('/receipts/:id', receiptsDelete); //Done

app.get('/eworksin', EworksIn); //done
app.post('/eworksin', EworksinPost); //done
app.patch('/eworksin/:id1/:id2', EworksinPatch); //done
app.delete('/eworksin/:id1/:id2', EworksinDelete); //done

app.route('/vehicles').get(Vehicles).post(VehiclesPost); //done
app.delete('/vehicles/:id', VehiclesDelete); //done

app.get('/dependents', Dependents); //done
app.post('/dependents', dependentsPost); //done
app.delete('/dependents/:id1/:id2', dependentsDelete); //done

app.get('/custbuys', CustBuys); //done
app.post('/custbuys', custbuysPost); //done
app.delete('/custbuys/:id1/:id2', custbuysDelete); //done

app.get('/package_has', PackageHas); //done
app.post('/package_has', package_hasPost); //done
app.delete('/package_has/:id1/:id2', package_hasDelete); //done

app.get('/drives', Drives); //Done
app.post('/drives', DrivePost); //Done
app.delete('/drives/:id1/:id2', DriveDelete); //Done

app.get('/accommodations', Acco); //Done
app.patch('/accommodations/:id', accommodationsPatch); //Done
app.post('/accommodations', accommodationsPost); //Done
app.delete('/accommodations/:id', accommodationsDelete); //Done

app.get('/accBelongTo', AccBelongTo); //Done
app.post('/accBelongTo', Acc_belongsToPost); //Done
app.delete('/accBelongTo/:id1/:id2', Acc_belongsToDelete); //Done

app.get('/authenticate/:Id/:Password', Authenticate); //Done
app.get('/authenticate2/:Id/:Password', Authenticate2); //Done


app.get('/CusHire/:id?', CusHire); //done
app.post('/CusHire', CusHirePost); //done
app.delete('/CusHire/:id', CusHireDelete); //done


const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
