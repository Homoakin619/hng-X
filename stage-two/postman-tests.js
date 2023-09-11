// postman Test Script
//**************************************//
//************POST REQUEST TEST**********//
//**************************************//

// body : {"name": "mark"}
pm.test("POST Success: ",function(){
    pm.response.to.have.status(200)
})

// body : {"name": "mark$"}
pm.test('Name with symbol fails: ',function(){
    pm.response.to.have.status(400)
})

// body : {"name": ""}
pm.test('Empty Name fails: ',function(){
    pm.response.to.have.status(400)
})

//**************************************//
//************PATCH REQUEST TEST**********//
//**************************************//

// body : {"name": "mark"}
pm.test("PATCH Success: ",function(){
    pm.response.to.have.status(200)
})

// body : {"name": "mark$"}
pm.test('Name with symbol fails: ',function(){
    pm.response.to.have.status(400)
})

// body : {"name": ""}
pm.test('Empty Name fails: ',function(){
    pm.response.to.have.status(400)
})

//**************************************//
//************GET REQUEST TEST**********//
//**************************************//

// param: 1000
pm.test("GET FAILS: ",function(){
    pm.response.to.have.status(400)
})


//**************************************//
//************DELETE REQUEST TEST**********//
//**************************************//

// param: 1000
pm.test("DELETE FAILS: ",function(){
    pm.response.to.have.status(400)
})







