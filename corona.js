// console.log("before");
const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");


request('https://www.worldometers.info/coronavirus/', function (error, response, html) {

    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        handleHTML(html);

    }
    
});

function handleHTML(html){
        let selectTool = cheerio.load(html);
        let contentArray = selectTool("#maincounter-wrap span");
        // for(let i = 0 ; i < contentArray.length ; i++){
        //     let data = selectTool(contentArray[i]).text();
        //     console.log("data: "+ data);

        // }

       let total =  selectTool(contentArray[0]).text();  
       let active =  selectTool(contentArray[1]).text();
       let recovered =  selectTool(contentArray[2]).text();

       console.log(chalk.gray("Total Cases: "  + total ));
       console.log(chalk.red("Active Cases: " + active ));
       console.log(chalk.green("Recovered: " + recovered ));


}
