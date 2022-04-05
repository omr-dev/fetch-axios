import "./style.scss";
const url =
  "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json";
(async () => {
  const response = await fetch(url);
  const employees = await response.json();
  console.log(employees);
  document.querySelector("#app").innerHTML = `
  <h1>Employees</h1>
  <ul>
  ${employees.map((employee) => {
    return "<li>" + employee.lastName + " " + employee.firstName + "</li>";
  }).join("")}
  </ul>
`;
})();
