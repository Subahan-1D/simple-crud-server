/***
 * ------------------
 * Mongodb Connection
 * ----------------------
 * 1. create account
 * 2. create an user with password
 * 3. white list Ip Address
 * 4. database > connect > driver > node.js > show all code
 * 5. Change the Password in the uri
 * ---------------------------------------
 * ------- server side -------
 * 1. CRETE ---- POST
 * 2. app.post('/users' ,async (req,res)=>{})
 * 3. make the function async to use await inside it 
 * 4. make sure use the express.json() middleware
 * 5. access data from the body : const user = req.body
 * 6.const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 * ----------------------client side ---------
 * 1. create fetch('http://localhost:5000/users')
 * 2. methods:'POST'
 * 3. headers : {'content-type':'application/json' }
 * 4. body:JSON.stringify(user)
   
*/