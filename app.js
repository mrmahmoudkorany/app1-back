

 

    const fs = require("fs")


   const  yargs = require("yargs")
  

   const data2 = require("./data2")

    yargs.command({
       command : "add" ,
       describe : " to add an item",
       builder : {
         fname : {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         lname : {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }

       },
       handler :(x)=> {
         //  console.log("you have already added an item")
         // console.log(x.id,x.fname , x.lname ,x.city ,x.age)
         data2.AddPerson(x.id , x.fname , x.lname , x.city , x.age)


       }
   })

   yargs.parse()   
// ..................................................................
yargs.command({
   command : "delete",
   describe: "to delete an item",
   handler : (x)=> {
     
      data2.DeleteData(x.id)
   }
})
yargs.parse()

//.........................................................................

yargs.command ({
   command : "read",
   describe : "to read an item",
   builder : {
      id : {
         describe : "this is id desc in read command ",
         demandOption : true,
         type: "string"
      }
   },
   handler: (x) => {
      data2.ReadData(x.id)
   }

})
yargs.parse()

//..................................................................

yargs.command ({
   command : "list",
   describe : "to list data",
   handler : () =>{
      data2.listData()
   }
})

yargs.parse()

  