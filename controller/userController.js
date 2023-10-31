const array = []; //database
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken') //import jwt
const secret_key="sunil"

const register = (req, res) => {
  const data = req.body;

  const details = array.find((item) => {
    if (item.email === data.email) {
      return item;
    }
  });
  if (details) {
    return res.send({ msg: "user is already registered" });
  }

  const saltround = bcrypt.genSaltSync(10);
  console.log(saltround);
  const hashPassword = bcrypt.hashSync(data.password,10) // some random string+symbol+number+password
//   console.log(hashPassword);

const tempObj = {
    email:data.email,
    password:hashPassword
}

  array.push(tempObj);
  const token = jwt.sign({useremail: data.email}, secret_key,{expiresIn:"360000"}); //for generating the jwt token
  console.log(token);
  res.send({msg:'user Registered',token: token});
};

const login = (req, res) => {
  const loginData = req.body;
  const details = array.find((item) => {
    if (item.email === loginData.email) {
      return item;
    }
  });

  console.log(details);

    if (details) {
        const validate = bcrypt.compareSync(details.password,loginData.password) //true or false
        if(validate){
            return res.send({msg:"user logged in successfully"})
        }
        else{
            return res.send({msg:"user password is wrong"})
        }
    //   return res.send({ msg: "user logged in" });
    } else {
      return res.send({ msg: "email is wrong" });
    }
};

const home = (req, res) => {
  return res.send("Hi This is Home Page");
};

module.exports = { register, login, home };
