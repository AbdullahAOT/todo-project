// Ask the user to enter his/her name as input.
let userName=prompt("Please enter your name:");

// Ask the user to enter his/her gender as input. The answer should be either (male or female).
let userGender=prompt("Please enter your gender:").toLowerCase();

// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
let userAge=prompt("please enter your age:");
if(userAge<=0){
window.alert("Your age should be above 0");
}

// Ask the user to confirm if he wants to skip the welcoming message.
let userSkipConfirmation=window.confirm("Do you want to skip the welcoming message ?");

let userAnswersArray=[];
userAnswersArray[0]=prompt("Do you like playing football ?").toLowerCase();
userAnswersArray[1]=prompt("Do you like JavaScript ?").toLowerCase();
userAnswersArray[2]=prompt("Do you want to learn Node.js as well ?").toLowerCase();

function checkUserAnswers(){
    for(let i=0;i<userAnswersArray.length;i++){
        if(userAnswersArray[i].toLowerCase()=="yes" || userAnswersArray[i].toLowerCase()=="no"){
            console.log(userAnswersArray[i]+"\n");
        }
        else{
            console.log("Invalid String"+"\n");
        }
    }
}
checkUserAnswers();

/* When the home page is running you will do the following requirements in app.js:
Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation.
Continue working on the styling of the project. */
//function userNameTitle(){
//    if(userGender=="male"){
//        return ("Mr");
//    }
//    else if(userGender=="female"){
//        return ("Ms");
//    }
//    else{
//        return "";
//    }
//}
//if(userSkipConfirmation==false){
//    window.alert("Welcome "+userNameTitle()+" "+userName);
//}
