export async function createNavBar(id, className, options, inroot) {
  const iterable = options.childList;
  const rootElement = document.getElementById(inroot);
  const theElement = document.createElement("div");
  theElement.setAttribute("id", id);
  theElement.classList = className;
  rootElement.appendChild(theElement);
  for (const item of iterable) {
    let newItem = document.createElement("a");
    newItem.setAttribute("id", item.id);
    newItem.setAttribute("name", item.name);
    newItem.setAttribute("href", item.href);
    newItem.textContent = item.textcontent;
    newItem.classList = item.classname;
    theElement.appendChild(newItem);
  }
}

export async function createTable(id, url, fetchoptions, inroot, classname) {
  return await fetch(url, fetchoptions)
    .then((data) => data.json())
    .then(function (data) {
      const rootElement = document.getElementById(inroot);
      const tableElement = document.createElement("table");
      tableElement.setAttribute("id", id);
      tableElement.classList = classname;
      const theadElement = document.createElement("thead");
      const tbodyElement = document.createElement("tbody");

      const headers = Object.keys(data[0]);
      const trHeaders = document.createElement("tr");
      for (const i of headers) {
        const thHeaders = document.createElement("th");
        thHeaders.textContent = i;
        trHeaders.appendChild(thHeaders);
      }

      for (const i of data) {
        const trData = document.createElement("tr");
        const data = Object.values(i);
        for (const k of data) {
          const tdData = document.createElement("td");
          tdData.textContent = k;
          trData.appendChild(tdData);
          tbodyElement.appendChild(trData);
        }
      }

      theadElement.appendChild(trHeaders);
      tableElement.appendChild(theadElement);
      tableElement.appendChild(tbodyElement);
      rootElement.appendChild(tableElement);
    });
}

export async function createButton(id, name, classname, containerid, text) {
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("id", id);
  buttonElement.setAttribute("name", name);
  buttonElement.classList.add(classname);
  buttonElement.textContent = text;

  const container = document.getElementById(containerid);
  container.appendChild(buttonElement);
}

export async function createForm(id, options, containerid, classname) {
  const formElement = document.createElement("form");
  formElement.setAttribute("id", id);
  for (const input of options.inputs) {
    const newInputElement = document.createElement("input");
    newInputElement.setAttribute("type", input.type);
    newInputElement.setAttribute("name", input.name);
    newInputElement.setAttribute("id", input.id);
    newInputElement.setAttribute("value", input.value);
    newInputElement.setAttribute("placeholder", input.placeholder);
    newInputElement.classList.add(input.classname);
    const formContainer = document.createElement("div");
    formContainer.classList = classname;
    formContainer.appendChild(newInputElement);
    formElement.appendChild(formContainer);
  }

  for (const label of options.labels) {
    const newLabelElement = document.createElement("label");
    newLabelElement.setAttribute("for", label.for);
    newLabelElement.textContent = label.text;
    newLabelElement.classList = label.classname;
    formElement.appendChild(newLabelElement);
  }

  const newSubmitButton = document.createElement("button");
  newSubmitButton.setAttribute("id", options.submit.id);
  newSubmitButton.textContent = options.submit.text;
  newSubmitButton.classList = options.submit.classname;
  if (options.submit.action === "post") {
    newSubmitButton.addEventListener("click", function () {
      fetch(options.submit.href, options.submit.actionoptions)
        .then((res) => res.json())
        .then((data) => console.log("Data enviada: ", data));
    });
  }
  formElement.appendChild(newSubmitButton);

  let rootElement;
  if (containerid) {
    rootElement = document.getElementById(containerid);
    rootElement.appendChild(formElement);
  } else {
    rootElement = document.getElementById("root");
    rootElement.appendChild(formElement);
  }
}

export async function createContainer(id, classname, order) {
  const containerElement = document.createElement("div");
  containerElement.setAttribute("id", id);
  containerElement.setAttribute("order", order);
  containerElement.classList = classname;
  containerElement.classList.add("containerGroup")
  const rootElement = document.getElementById("root") 
  rootElement.appendChild(containerElement)
}
