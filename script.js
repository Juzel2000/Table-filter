// table = document.getElementById("table");
// search = document.getElementById("search");

const tableData = [
  {
    id: 1,
    name: "Juzel",
    email: "muhammedjuzel2000@gmail.com",
    address: "jj manzil",
  },
  {
    id: 2,
    name: "Thowfeek",
    email: "Thowfeek234@gmail.com",
    address: "TFK manzil",
  },
  {
    id: 3,
    name: "Jazeel",
    email: "muhammedjazel123@gmail.com",
    address: "jj manzil",
  },
  {
    id: 4,
    name: "Sammed",
    email: "Sammed256@gmail.com",
    address: "Sammed manzil",
  },
  {
    id: 5,
    name: "Amal",
    email: "amallal576@gmail.com",
    address: "amal bhavan",
  }
];
var keys = ["id", "name", "email", "address"];
for (var i of tableData) {
  var row = table.insertRow(-1);
  console.log(table);

  for (var b = 0; b < keys.length; b++) {
    var cell = row.insertCell(b);
    cell.innerText = i[keys[b]];
  }

}
// function myFunction() {
//     var search, filter, table, tr, td, i;
//     search = document.getElementById("search");
//     filter = search.value.toUpperCase();
//     table = document.getElementById("table");
//     tr = table.getElementsByTagName("tr");
//     // console.log(tr)
//     for (i = 0; i < tr.length; i++) {
        
//       td = tr[i].getElementsByTagName("td")[1];
//       if (td) {
//         if (td.innerHTML.toUpperCase().includes(filter)) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
// }






