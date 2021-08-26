/**
    //input
   ler user =  {
                firstname:"harshith",
                lastname:"gowda",
                address: {
                    area:"Vijayanagar"
                    city:"bangalore",
                    state:"karnataka"
                },
                education:{
                    primary:{
                        school:"Government primary school"
                    },
                    highschool:{
                        school:"Government high school"
                    },
                    higher:{
                        diploma:{
                            college:"Government polytechnic"
                        },
                        engineering:{
                            college:"NIE"
                        }
                    }
                }
            }

            //output
            user = {
                user_firstname:"harshith",
                user_lastname:"gowda",
                user_address_area:"Vijayanagar",
                user_education_primary_school: "Government primary school"
            }
 */

function flattenObject(input, parent) {
    let flat = {};
    if(!parent) throw new Error("require parent");
    for (let k in input) {
        if (typeof input[k] != 'object') {
            flat[`${parent}_${k}`] = input[k]
        } else {
            flat = { ...flat, ...flattenObject(input[k], `${parent}_${k}`) }
        }
    }
    return flat;
}

let user = {
    firstname: "harshith",
    lastname: "gowda",
    address: {
        area: "Vijayanagar",
        city: "bangalore",
        state: "karnataka"
    },
    education:{
        primary:{
            school:"Government primary school"
        },
        highschool:{
            school:"Government high school"
        },
        higher:{
            diploma:{
                college:"Government polytechnic"
            },
            engineering:{
                college:"NIE"
            }
        }
    }
}
console.log(flattenObject(user,"user"));