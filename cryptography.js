//cryptography function modeled on enigma

function enigma(message, offSet=1){
    //let offSet = 1;
    message=message.toLowerCase();
    let codedMessage="";
    for (i=0; i< message.length; i++){
        if (!(message[i] === " ")){
            let charMessage = (message.charCodeAt(i)+ offSet + i - "a".charCodeAt(0));//gives you the position in alphabet 
            //console.log(charMessage)
            charMessage = (+charMessage) %26;//if outside the alphabet go back to the bounds of the alphabet
            charMessage = +charMessage +'a'.charCodeAt(0)
            codedMessage += String.fromCharCode(charMessage)
            //console.log(charMessage.toString())
        }
        else {

            codedMessage += " "
            
        }
    }
    return codedMessage
}

function dEnigma(message, offSet = 1){
    message=message.toLowerCase();
    let deCodedMessage="";
    //console.log("made it to DECRYpt")
    for (i=0; i< message.length; i++){
        //console.log(i)
        if (!(message[i] === " ")){
            let charMessage = (message.charCodeAt(i)- offSet - i - "a".charCodeAt(0));//gives you the position in alphabet
            //console.log(charMessage)
            
            while (charMessage < 0) {
                charMessage +=26
            }
            charMessage = (+charMessage) %26;
            charMessage = +charMessage +'a'.charCodeAt(0)
            deCodedMessage += String.fromCharCode(charMessage)
            //console.log(charMessage.toString())
        }
        else{
            deCodedMessage += " "
        }
    }
    return deCodedMessage

}

console.log(enigma("hi"))//becomes ik
console.log(enigma("happy birthday"))
console.log(dEnigma("icstd iqadspnm"))//should happy birthday
let answer = enigma("the quick brown fox jumped over the lazy dog")
console.log(answer)
console.log(dEnigma(answer))