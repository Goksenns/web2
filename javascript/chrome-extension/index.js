let myLeads = '["www.awesome.com"]';

myLeads = JSON.parse(myLeads)

myLeads.push("www.eren.com")

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += 
    `<li>
          <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
          </a>
    </li>`;

    //another way of innerHTML
    // const li= document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems;
}
