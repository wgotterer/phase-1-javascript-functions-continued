function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(type="special"){
        return `You are ${flair}${type}${flair}!`
    };
}

wrapAdjective("*")("a dedicated programmer"); 



// function outer(greeting, msg = "It's a fine day to learn") {
//     return function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//   }
  
//   outer("Hello")("student", "JavaScript");


//   //=> "Hello, student! It's a fine day to learn JavaScript"
  