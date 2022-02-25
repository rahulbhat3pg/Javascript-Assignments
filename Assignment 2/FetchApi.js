import fetch from "node-fetch";

async function callingExternalApi() {
    try {
        let response= await fetch(api); //getting the response from the API
        let jsonObject= await response.json(); //converting the response from API in json format
        let dataArray= await jsonObject.data; //getting the data array from the json repsonse
        let extractedObject= dataArray.map( person_details => { //returning the required details only to extracted Object
            return {
                "id": person_details.id,
                "email": person_details.email,
                "firstName": person_details.first_name,
                "lastName": person_details.last_name
            }
        });
        return await extractedObject;
    }
    catch(error) {
        console.log(error)
    }
}
 let api= 'https://reqres.in/api/users'; //required API
 let requiredResponse= await callingExternalApi(api); //function call
 console.log(requiredResponse);