
// // fetch data from the URL and convert it to JSON
// fetch("http://localhost:8080/trainers").then(response => {
//     if (response.status === 200)
//       return response.json();
//     else
//       console.log("Request failed:", response.statusText);

//   }).then(json => {
//     console.log("JSON:", json);
//     document.getElementById("output").innerText = JSON.stringify(json, null, 2);
//   })
//   .catch(err => console.error(err));

// console.log("AFTER THE FETCH");

async function fetchTrainers() {

  // fetch data from the URL and convert it to JSON
  const response = await fetch("http://localhost:8080/trainers")
  if (response.status === 200) {
    const json = await response.json();
    console.log("JSON:", json);
    document.getElementById("output").innerText = JSON.stringify(json, null, 2);
    return json;
  } else {
    console.log("Request failed:", response.statusText);
  }


  console.log("AFTER THE FETCH");

}

const json = await fetchTrainers();

try {
  const response = await new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8080/trainers");
    req.onreadystatechange = function () {
      // debugger
      if (this.readyState === 4 && this.status === 200) {
        debugger
        console.log("req successful");
        resolve(this.responseText);
      } else if (this.readyState === 4 && this.status !== 200) {
        debugger
        console.log("req failed");
        reject({ status: this.status, message: this.responseText });
      }
    }
    req.send();
  });
  const json = JSON.parse(response);
  console.log("JSON:", json);
} catch (error) {
  // debugger
  console.error(error);
}

