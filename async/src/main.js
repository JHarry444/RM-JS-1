
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

// try {
//   const response = await new Promise(function (resolve, reject) {
//     const req = new XMLHttpRequest();
//     req.open("GET", "http://localhost:8080/trainers");
//     req.onreadystatechange = function () {
//       // debugger
//       if (this.readyState === 4 && this.status === 200) {
//         debugger
//         console.log("req successful");
//         resolve(this.responseText);
//       } else if (this.readyState === 4 && this.status !== 200) {
//         debugger
//         console.log("req failed");
//         reject({ status: this.status, message: this.responseText });
//       }
//     }
//     req.send();
//   });
//   const json = JSON.parse(response);
//   console.log("JSON:", json);
// } catch (error) {
//   // debugger
//   console.error(error);
// }



// 'should' only use anonymous funcs for event listeners as it allows you to use this
document.querySelector("form").addEventListener("submit", async function (event) {
  // prevents the page from being reloaded
  event.preventDefault();
  console.log("TARGET:", event.target);
  console.log("THIS:", this);



  const data = {
    name: document.getElementById("trainerName").value,
    age: parseInt(event.target.trainerAge.value),
    specialism: this.trainerSpecialism.value
  }
  console.log("DATA:", data);

  debugger
  // SEND DATA TO API

  try {
    const res = await fetch("http://localhost:8080/trainers", {
      method: "POST",
      body: JSON.stringify(data)
    })
    if (res.status === 201) {
      console.log("Trainer added successfully");
      fetchTrainers();
      this.reset();
      this.trainerName.focus();
    } else {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.error(err);
  }

})