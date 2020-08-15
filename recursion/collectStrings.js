const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let newArr=[];
    for (key in obj){
        if (typeof obj[key]==='string'){
            newArr.push(obj[key]);
        } else if (typeof obj[key] === 'object'){
            newArr= newArr.concat(collectStrings(obj[key]));
        }
    }
    return newArr;
}


console.log(collectStrings({
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}));