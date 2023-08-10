const connection = require('./../helper/dbconnection');
const jwt = require('jsonwebtoken');

exports.signup = (req,res)=>{
    try{
    const {username,password} = req.body;
    let query = `INSERT into users(username,password) VALUES ('${username}','${password}')`;
    connection.query(query,(err,result)=>{
        console.log("User is Signed Up",result);
        return res.status(200).json({
            message:"user is successfully signed up",
            data:result,
        })
    })
    }
    catch(err){
        console.error("user not signed up");
        return res.status(500).json({
            message:"server error"
        })
    }
}

exports.login = (req,res)=>{
 try{
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    let query = `SELECT id, username FROM users WHERE username = '${username}' AND password = '${password}'`;
    connection.query(query,(err, results) => {
        if (err) throw err;
        console.log('----------------->',results);
        if (results.length === 0) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
  
         const token = jwt.sign({ username: results[0].username }, 'shhhhh');
        res.json({ 
          messsage:"user logged in ",
          id: results[0].id,
          username: results[0].username ,
          token:token
      });
      }
    );
 }
 catch(err){
    console.error("user not loged in");
        return res.status(500).json({
            message:"server error"
        })
 }
}

exports.getProducts =(req,res)=>{
    // try{
    //     let query =`SELECT * FROM products`;
    //     connection.query(query,(err,result)=>{
    //         console.log("Products found",result);
    //         return res.status(200).json({
    //             message:"Products found",
    //             data:result,
    //         })
    //     })
    // }catch(err){
    //     console.error("Products not found");
    //     return res.status(500).json({
    //         message:"server error"
    //     })
    // }
   
  
    try {
        const page = parseInt(req.query.page) || 1;
        console.log(page);
        const limit = parseInt(req.query.limit) || 10;
        console.log(limit);
        const offset = (page - 1) * limit;
        console.log(offset);
      
        let query = `SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`;
        console.log(query);
        connection.query(query, (err, result) => {
          if (err) throw err;
    
          let countQuery = `SELECT COUNT(*) AS total FROM products`;
    
          connection.query(countQuery, (countErr, countResult) => {
            if (countErr) throw countErr;
            const totalCount = countResult[0].total;
            res.json({
              result,
              limit,
              totalCount
            });
          });
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      
}