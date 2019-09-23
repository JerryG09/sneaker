let populate_ui = () => {
  let tbody = document.getElementById("tbody");

  fetch("https://randomuser.me/api/?results=14")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.results);

      let text_output = "";
      for (let i = 0; i < data.results.length; i++) {
        // console.log(data.results[i].dob.age)
        text_output += `<tr>
                <td>${data.results[i].name.first} ${data.results[i].name.last}</td>
                <td>${data.results[i].email}</td>
                <td>${data.results[i].phone}</td>
                <td>${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state}, India</td>
                <td>${data.results[i].dob.age}</td>
        </tr>`;
      }
      tbody.innerHTML = text_output;
    });
};
populate_ui();


fetch("https://randomuser.me/api/?results=21")
    .then(res => {
      return res.json();
    })
    .then(data => {
    //   console.log(data.results);
        data.results.forEach(el => {
            console.log(el.email)
        });
    });