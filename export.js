// ASSIGNMENT.
// create a file that contains an object of your bio-data. Use your data in a different file to create any thing you like.

export let bioData = {
  firstName : "Wisdom",
  lastName : "Ezeh",
  middleName : "Chinemerem",
  userName : "Ash",
  DOB : "06 Jan 2007",
  stateOfOrigin : "Abia State",
  nationality:  "Nigerian",
  localGov : "Isuikwuato",
  favFood : "Rice",
  hobby : "Reading",
  favSport : "Soccer",
  resident : "NO.4 Nwamkpa, Umungasi Aba, Abia State",
  occupation : "Student",
  email : "wisdomcezeh@gmail.com",
  phone : +2347072967842,
  married : false,
  children : false,    
  nextOfKin : null,    
  parents : "Mr & Mrs Christopher Ezeh"
}

console.log(bioData);

export function dataBits(){
  let dataSkim = `User's name is: ${bioData.firstName} ${bioData.lastName} \n Username name is: ${bioData.userName} \n User's email address: ${bioData.email}`;
  return dataSkim;
}

