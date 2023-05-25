function rot13(str) {
    let result = catchChar(str);
    result = convertCharToUTF(result);
    result = addKey(result);
    result = convertCodeToChar(result);
    result = previousMap(result);
    return result.join(" ");
}

function previousMap(arr) {
    let result;
    result = arr.map(
        item => item.join("")
    );
    return result;
}

function convertCodeToChar(arr) {
    let result = [];
    arr.forEach(
        item => result.push(
            item.map(
                element => String.fromCharCode(element)
            )
        )
    );
    return result;
}

function addKey(arr) {
    let result = [];
    arr.forEach(
        item =>
            result.push(item.map(
                element => {
                    if(65 <= element && element <= 90) {
                        if(element + 13 <= 90) {
                            return element + 13;
                        } else  {
                            return 65 + ((element + 13) % 65) - 26 ;
                        }
                    } else {
                        return element;
                    }
                }
            ))
    );
    return result;
}

function convertCharToUTF(arr) {
    let result;
    result = arr.map(
        item => {
            let arrItem = [];
            for(let i = 0 ; i < item.length ; i++) {
                arrItem.push(item[i].charCodeAt());
            }
            return arrItem;
        }
    );
    return result;
}
  
function catchChar(str) {
    let result;
    let regExp = /[A-Z!\.?,:\-_]+/g;
    result = str.toUpperCase().match(regExp);
    
    return result;
}
  
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//console.log("Result : ",catchChar("SERR PBQR PNZC"));
//console.log("Number : ", convertCharToUTF([ "SERR", "PBQR", "PNZC" ]));
//console.log("Number : ", addKey(convertCharToUTF([ "SERR", "PBQR", "PNZC" ])));
//console.log("Final result : ", previousMap(convertCodeToChar(addKey(convertCharToUTF(catchChar("SERR PBQR PNZC"))))));