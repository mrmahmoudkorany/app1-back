

  const fs = require("fs")

  const AddPerson = (id , fname , lname , city , age) => {
       const allData = loadInfo()
       const duplicatedData = allData.filter((obj) =>{
        return  obj.id === id 
     })

      if (duplicatedData.length == 0  ){

     allData.push({
       id : id,
       fname : fname,
       lname : lname,
       city : city,
       age : age
     })
     saveAlldata(allData)
    } else {
      console.log("ERROR DUPLICATED DATA")
    }  
  }

// ....................................................................

  const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data2.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    }
     
  }

//....................................................................
 
  const saveAlldata = (allData) => {
     const saveAllDataJson  = JSON.stringify(allData)
     fs.writeFileSync("data2.json" , saveAllDataJson)
  }
// ......................................................................................
const DeleteData= (id)=>{
  const allData=loadInfo()
  const dataTokeep=allData.filter((obj)=>{
    return obj.id !==id
  })
  saveAlldata(dataTokeep)
}
// ......................................................................................
const ReadData = (id) => {
  const allData = loadInfo()

  const ItemNeeded = allData.find((obj) => {
     return  obj.id == id 
  })

  // console.log(itemNeeded)
  if (ItemNeeded) {
    console.log(ItemNeeded)
  }else {
    console.log("ID NEEDED NOT FOUND")
  }
}

//.......................................................................................

// list 
    const listData = () => {
       const  allData = loadInfo()

        allData.forEach((obj) => {
          console.log(obj.fname , obj.city)
        })

    }
// ...............................................................
module.exports = {
    AddPerson,
    DeleteData,
    ReadData,
    listData  
}