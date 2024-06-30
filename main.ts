#! /usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer"
import {addMinutes, differenceInSeconds, interval, set} from "date-fns"

const res = await inquirer.prompt(
    [
        {
            name:"userInput",
            type: "number",
            message: "please enter the amount the second",
            validate: (input)=> {
                if(isNaN(input)){
                    return "please enter valid number"
                }else if(input > 100){
                    return "seconds must be in 100"
                }else{
                    return true
                }
            }
        }
    ]
);
let input = res.userInput
function startTime(val:number){
    const inTime = new Date ().setSeconds(new Date ().getSeconds()+ val);
    const IntervalTime = new Date (inTime)
    setInterval((()=>{
        const currTime = new Date()
        const timeDiff = differenceInSeconds(IntervalTime , currTime )
        if (timeDiff <= 0){
            console.log("time has expired");   
            process.exit() 
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff%60);
        console.log(`${min.toString().padStart(2 ,"0")}: ${sec.toString().padStart(2 ,"0")}`)


    }),1000)
}
startTime(input)
