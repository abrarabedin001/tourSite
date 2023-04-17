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

let CustomersAll = (req, res) => {
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
  const { id2, Name, Phone, Email, Address, User_name, Password } = req.body;
  console.log(req.body);
  // let query = `insert into customer (id,name,phone,email,address,user_name,password) values('${Id}','${Name}',"${Phone}","${Email}",'${Address}','${User_name}','${Password}')`;
  let query = `UPDATE customer
  SET password= '${Password}', phone='${Phone}' , name='${Name}' , user_name='${User_name}', address='${Address}', email='${Email}'
  WHERE id = '${id}'`;
  console.log(query);
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

let PackagesAll = (req, res) => {

let { id } = req.params;
if (id) {
  let query = `SELECT * FROM package where id = '${id}'`;
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
} else {
  let query = 'SELECT * from package';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
}
};


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

  const { Name, Availability, Price} = req.body;


  let query = `UPDATE package
  SET name= '${Name}', availability='${Availability}', price='${Price}'
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

let LocationsAll = (req, res) => {
  var query = 'SELECT * FROM location';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

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

let EmployeesAll = (req, res) => {
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
// employeesPatch
let employeesPatch = (req, res) => {
  // console.log(req.body, 'sdfsdf');

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

  let query = `update employee set Id ='${Id}',User_name= '${User_name}', Password='${Password}', Phone='${p1}', Hour_work='${p2}', Joining_date='${Joining_date}', Leaving_date='${Leaving_date}',Salary_per_hour='${p3}',Etype='${Etype}' where Id = '${Id}'`;
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
  let { id } = req.params;
  if (id) {
    let query = `select  r.Receipt_id,r.Cid,c.name as c_name,r.pid,p.name as p_name,r.paid_unpaid from receipt r, customer c, package p where r.cid=c.id and r.pid=p.id and cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      'select  r.Receipt_id,r.cid,c.name as c_name,r.pid,p.name as p_name,r.paid_unpaid from receipt r, customer c, package p where r.cid=c.id and r.pid=p.id';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
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

let CustbuysAll = (req, res) => {
  // let query = `SELECT * FROM custbuy`;
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  // SELECT * FROM custbuy where Cid = '03' and Pid='01 and Start_date='2022-03-01';
  // SELECT * from custbuy where Cid = '01' and Pid='02' and Start_date='2022-01-08';
  let { id,id1,id2 } = req.params;
  if (id) {
    let query = `SELECT * from custbuy where Cid = '${id}' and Pid='${id1}' and Start_date='${id2}'`;
    console.log(query)
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      `SELECT * FROM custbuy`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};
// CustbuysPatch
let CustbuysPatch = (req, res) => {
  let { id,id1,id2 } = req.params;
  const { Cid, Pid, Start_date, End_date,Paid_unpaid } = req.body;
// update custbuy set Cid='03', Pid='03',Start_date='2022-03-08T00:00:00.000Z',End_date= '2022-03-14T00:00:00.000Z' where Cid = '03' and Pid='03' and Start_date='2022-03-08';
  
  let query = `update custbuy 
  set Cid='${Cid}', Pid='${Pid}',Start_date='${Start_date}',End_date= '${End_date}',Paid_unpaid='${Paid_unpaid}'
  where Cid = '${id}' and Pid='${id1}' and Start_date='${id2}'`;

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



let Custbuys = (req, res) => {
  let { id } = req.params;
  if (id) {
    let query = `SELECT c.Cid, cus.name, c.Pid, p.name as Package, c.Start_date, c.End_date,p.Price, c.Paid_unpaid FROM custbuy c, customer cus, package p where c.pid = p.id and c.cid = cus.id and cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      'SELECT c.Cid, cus.name, c.Pid, p.name as Package, c.Start_date, c.End_date,p.Price, c.Paid_unpaid FROM custbuy c, customer cus, package p where c.pid = p.id and c.cid = cus.id';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};

let custbuysPost = (req, res) => {
  const {Cid, Pid, Start_date, End_date,Paid_unpaid } = req.body;

  let query = `insert into custbuy (Cid, Pid, Start_date, End_date,Paid_unpaid)
  values('${Cid}', '${Pid}',' ${Start_date}', '${End_date}','${Paid_unpaid}')`;

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
  const { id1, id2,id3 } = req.params;
// delete from   custbuy where cid = "04"  and Pid = "04" and Start_Date="2022-04-08T00:00:00.000Z";
  let query = `delete from   custbuy where cid = "${id1}"  and Pid = "${id2}" and Start_Date="${id3}" `;
  console.log(query)
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

let PackageHasAll = (req, res) => {
  var query = 'SELECT * FROM package_has';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let PackageHas = (req, res) => {
  var query =
    'SELECT p.Lid, l.name as location_name, p.Pid , pa.name as package_name FROM package_has p,location l, package pa where pa.id = p.pid and l.id = p.lid;';
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
let EworksInAll = (req, res) => {
  //   console.log('kaj kore');

  //   let query = `Select * from eworksin`;
  //   database.query(query, function (error, data) {
  //     res.json({
  //       data: data,
  //     });
  //   });
  // };
  let { id1, id2 } = req.params;
  console.log('kaj kore');
  if ((id1, id2)) {
    let query = `Select * from eworksin where Lid='${id1}' and Emp_id ='${id2}'`;
    console.log(query);
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query = 'Select * from eworksin';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};
let EworksIn = (req, res) => {
  // Select ew.lid, l.name as Lname,ew.emp_id, e.name as Ename from employee e, location l, eworksin ew where ew.lid=l.id and ew.emp_id=e.id
  // var query = "SELECT * FROM Eworksin";
  // var query =
  //   'Select ew.lid, l.name as Lname,ew.emp_id, e.user_name as Ename from employee e, location l, eworksin ew where ew.lid=l.id and ew.emp_id=e.id';
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  let { id } = req.params;
  console.log('kaj kore');
  if (id) {
    let query = `Select ew.Lid, l.name as Lname,ew.Emp_id, e.user_name as Ename, ew.Wage, ew.Date from employee e, location l,  eworksin ew where ew.lid=l.id and ew.emp_id=e.id and ew.emp_id = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      'Select ew.Lid, l.name as Lname,ew.Emp_id, e.user_name as Ename, ew.Wage, ew.Date from employee e, location l, eworksin ew where ew.lid=l.id and ew.emp_id=e.id';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};
let EworksinPatch = (req, res) => {
  const { id1, id2 } = req.params;
  const { Lid, Date, Wage } = req.body;
  let query = `update eworksin Set lid='${Lid}', date='${Date}',wage=${Wage}
  Where emp_id='${id2}' and lid='${id1}' `;
  console.log(query);
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

//////////////////

let VehiclesAll = (req, res) => {
  var query = 'SELECT * FROM vehicle';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let Vehicles = (req, res) => {
  var query = 'SELECT v.License, v.Pid, p.name as Package,v.Vtype,v.Date FROM vehicle v,package p where v.Pid=P.Id';
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

let DependentsAll = (req, res) => {
  console.log('DependentsAll backend Hit');

  let { id1, id2 } = req.params;
  if (id1) {
    var query = `SELECT * FROM dependent where Cid='${id1}' and Dname='${id2}'`;
    console.log(query)
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    var query = 'SELECT * FROM dependent';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};

let Dependents = (req, res) => {
  // var query = 'SELECT * FROM dependent';
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  console.log('hello');

  let { id } = req.params;
  if (id) {
    let query = `SELECT d.Cid, c.User_name ,d.Dname,d.age,d.number FROM dependent d, customer c where c.id=d.cid and cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      'SELECT d.Cid, c.User_name ,d.Dname,d.age,d.number FROM dependent d, customer c where c.id=d.cid and cid';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};
let dependentsPost = (req, res) => {
  const { Cid, Dname, Age, Number } = req.body;

  console.log('DependentsAll backend Hit');

  let { id1, id2 } = req.params;
  if (id1) {
    var query = `SELECT * FROM dependent where Cid='${id1}' and Dname='${id2}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
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
  }
};
// dependentsPatch

let dependentsPatch = (req, res) => {
 
  const { Cid, Dname, Age, Number } = req.body;

  console.log('DependentsPatch backend Hit');

  let { id1, id2 } = req.params;
 
    var query = `update dependent
      set Cid='${Cid}', Dname='${Dname}', Age='${Age}',Number='${Number}'
    where Cid='${id1}' and Dname='${id2}'`;
    console.log(query)
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  
};

let dependentsDelete = (req, res) => {
  const { id1, id2 } = req.params;

  let query = `delete from   dependent where cid = "${id1}"  and Dname = "${id2}" `;
  console.log(query);
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

let DrivesAll = (req, res) => {

    let { id,id1 } = req.params;
    if (id) {
     
      let query = `SELECT * FROM drive where Emp_id = '${id}' and Vlicense = '${id1}' `;

      database.query(query, function (error, data) {
        res.json({
          data: data,
        });
      });
    } else {
      
      let query = 'SELECT * from drive';
      database.query(query, function (error, data) {
        res.json({
          data: data,
        });
      });
    }
    };

let Drives = (req, res) => {
  var query1 = 'SELECT * FROM drive';
  var query =
    'SELECT d.Emp_id, e.user_name ,d.Vlicense ,d.date FROM drive d, employee e where e.id=d.emp_id';
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

let DrivesPatch = (req, res) => {
 
  const { Emp_id,Vlicense,Date } = req.body;
  console.log(req.body)
  let { id1, id2, id3} = req.params;
 
    var query = `update drive
      set Emp_id='${Emp_id}', Vlicense='${Vlicense}', date='${Date}' where Emp_id='${id1}' and Vlicense='${id2}' and date='${id3}'`;
    
    console.log(query)
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  
};
let DriveDelete = (req, res) => {
  const { id1, id2, id3 } = req.params;
  
  let query = `delete from   drive where emp_id = "${id1}"  and Vlicense = "${id2}" and date='${id3}' `;
  console.log(query)
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

let AccoAll = (req, res) => {
  var query = 'SELECT * FROM accommodation';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

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

let AccBelongToAll = (req, res) => {
  // select ab.aid,ac.name,ab.pid,p.name from acc_belongsto ab ,accommodation ac ,package p
  // where ab.aid = ac.id and ab.pid = p.id
  let query = `select * from acc_belongsto`;
  // var query = "SELECT * FROM acc_belongsto";
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let AccBelongTo = (req, res) => {
  // select ab.aid,ac.name,ab.pid,p.name from acc_belongsto ab ,accommodation ac ,package p
  // where ab.aid = ac.id and ab.pid = p.id
  let query = `select ab.Aid,ac.name as ACName,ab.Pid,p.name as PName from acc_belongsto ab ,accommodation ac ,package p where ab.aid = ac.id and ab.pid = p.id`;
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

let CusHireAll = (req, res) => {
  var query = 'SELECT * FROM cushire';
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

let CusHire = (req, res) => {
  // var query = 'SELECT * FROM employee';
  // database.query(query, function (error, data) {
  //   res.json({
  //     data: data,
  //   });
  // });
  let { id } = req.params;
  if (id) {
    let query = `SELECT cs.Cid,c.name as c_name, cs.Vlicense, v.vtype as V_type,cs.date FROM cushire cs,customer c, vehicle v  where cs.cid=c.id and cs.vlicense=v.license and cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query = `SELECT cs.Cid,c.name as c_name, cs.Vlicense, v.vtype as V_type ,cs.date FROM cushire cs,customer c, vehicle v  where cs.cid=c.id and cs.vlicense=v.license`;
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

let CusHireDelete = (req, res) => {
  const { id, id1 } = req.params;

  let query = `delete from  CusHire where Cid = "${id}" and vlicense='${id1}'`;
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

let CusBooksAll = (req, res) => {
  let query = `SELECT * FROM cusbook`;
  database.query(query, function (error, data) {
    res.json({
      data: data,
    });
  });
};

//
let CusBooks = (req, res) => {
  let { id } = req.params;
  if (id) {
    let query = `SELECT cs.Cid,c.name as c_name, cs.Aid, a.name as a_name FROM cusbook cs,customer c, accommodation a  where cs.cid=c.id and cs.aid=a.id and cid = '${id}'`;
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  } else {
    let query =
      'SELECT cs.Cid,c.name as c_name, cs.Aid, a.name as a_name FROM cusbook cs,customer c, accommodation a  where cs.cid=c.id and cs.aid=a.id';
    database.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }
};

let CusBooksPost = (req, res) => {
  const { Cid, Aid } = req.body;

  let query = `insert into CusBook(Cid, Aid)
  values('${Cid}', '${Aid}')`;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data inserted',
      },
    });
  });
};

let CusBooksDelete = (req, res) => {
  const { id1, id2 } = req.params;
  let query = `delete from   CusBook where Cid = "${id1}"  and Aid = "${id2}" `;
  database.query(query, function (err, data) {
    if (err) throw err;
    res.json({
      data: {
        message: 'data deleted',
      },
    });
  });
};

////////////////////////
app.get('/customersAll/:id?', CustomersAll); //done
app.get('/customers/:id?', Customers); //done
app.patch('/customers/:id', CustomersPatch); //done
app.post('/customers', CustomersPost); //done
app.delete('/customers/:id', CustomersDelete); //done

app.get('/packagesAll/:id?', PackagesAll); //done
app.get('/packages', Packages); //done
app.patch('/packages/:id', PackagesPatch); //done
app.post('/packages', packagesPost); //done
app.delete('/packages/:id', packagesDelete); //done

app.get('/locationsAll', LocationsAll); //DOne
app.get('/locations', Locations); //DOne
app.post('/locations', locationsPost); //Done
app.delete('/locations/:id', locationsDelete); //DOne

app.get('/employeesAll/:id?', EmployeesAll); //Done
app.get('/employees/:id?', Employees); //Done
app.post('/employees', employeesPost); //Done
app.patch('/employees/:id', employeesPatch); //Done
app.delete('/employees/:id', employeesDelete); //Done

app.get('/eworksinAll/:id1?/:id2?', EworksInAll); //done
app.get('/eworksin/:id?', EworksIn); //done
app.post('/eworksin', EworksinPost); //done
app.patch('/eworksin/:id1/:id2', EworksinPatch); //done
app.delete('/eworksin/:id1/:id2', EworksinDelete); //done

app.route('/vehiclesAll').get(VehiclesAll);
app.route('/vehicles').get(Vehicles).post(VehiclesPost); //done
app.delete('/vehicles/:id', VehiclesDelete); //done

app.get('/dependentsAll/:id1?/:id2?', DependentsAll); //done
app.get('/dependents/:id?', Dependents); //done
app.post('/dependents/:id1?/:id2?', dependentsPost); //done
app.patch('/dependents/:id1?/:id2?', dependentsPatch); //done
app.delete('/dependents/:id1/:id2', dependentsDelete); //done

app.get('/custbuysAll/:id?/:id1?/:id2?', CustbuysAll); //done
app.patch('/custbuys/:id?/:id1?/:id2?', CustbuysPatch); //done
app.get('/custbuys/:id?', Custbuys); //done
app.post('/custbuys', custbuysPost); //done
app.delete('/custbuys/:id1/:id2/:id3', custbuysDelete); //done

app.get('/package_hasAll', PackageHasAll); //done
app.get('/package_has', PackageHas); //done
app.post('/package_has', package_hasPost); //done
app.delete('/package_has/:id1/:id2', package_hasDelete); //done

app.get('/drivesAll/:id?/:id1?', DrivesAll); //Done
app.get('/drives', Drives); //Done
app.patch('/drives/:id1/:id2/:id3',DrivesPatch)
app.post('/drives', DrivePost); //Done
app.delete('/drives/:id1/:id2/:id3', DriveDelete); //Done

app.get('/accommodationsAll', AccoAll); //Done
app.get('/accommodations', Acco); //Done
app.patch('/accommodations/:id', accommodationsPatch); //Done
app.post('/accommodations', accommodationsPost); //Done
app.delete('/accommodations/:id', accommodationsDelete); //Done

app.get('/accBelongToAll', AccBelongToAll); //Done
app.get('/accBelongTo', AccBelongTo); //Done
app.post('/accBelongTo', Acc_belongsToPost); //Done
app.delete('/accBelongTo/:id1/:id2', Acc_belongsToDelete); //Done

app.get('/authenticate/:Id/:Password', Authenticate); //Done
app.get('/authenticate2/:Id/:Password', Authenticate2); //Done

app.get('/CusHireAll', CusHireAll); //done
app.get('/CusHire/:id?', CusHire); //done
app.post('/CusHire', CusHirePost); //done
app.delete('/CusHire/:id/:id1', CusHireDelete); //done

app.get('/cusbookAll', CusBooksAll); //Done
app.get('/cusbook/:id?', CusBooks); //Done
app.post('/cusbook', CusBooksPost); //Done
app.delete('/cusbook/:id1/:id2', CusBooksDelete); //Done

const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
