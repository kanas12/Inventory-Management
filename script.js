
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const addForm = document.querySelector(".add-form")
    const addButton = document.querySelector("#addItem")
    const addsubmitItem = document.querySelector("#submitItem");
    const removeItem = document.querySelector('#removeItem');

   
    function editItem(itemName){
        const newItem = {
            itemName: document.querySelector(`#${itemName}Name`).innerText,
            price: document.querySelector(`#${itemName}Price`).innerText,
            payment: document.querySelector(`#${itemName}Payment`).innerText,
            status: document.querySelector(`#${itemName}Status`).innerText,
        }

        localStorage.setItem("editItem", JSON.stringify(newItem));
    }
    toggle.addEventListener('click',()=> {
        console.log(navigation.classList.toggle('active'))
    })

    removeItem.addEventListener("click", ()=>{
        document.querySelector("#itemsTable").lastElementChild.outerHTML = "";
    })
    addButton.addEventListener('click',()=>{
        
        if(addForm.classList.contains("hide")){
            addForm.classList.remove("hide");
        }else{
            addForm.classList.add("hide");
        }
    })


    addsubmitItem.addEventListener('click',(e)=>{
        let inputvalues = [];
        e.preventDefault();
        const inputs = document.querySelectorAll(".itemInfo");

        inputs.forEach((elem)=>{
             inputvalues.push(elem.value)
        })

        console.log(inputvalues)

        const addNewItem = document.createElement("tr");
        addNewItem.className = "newProduct";
        
        let columnValues1 = document.createElement("td");
        let columnValues2 = document.createElement("td");
        let columnValues3 = document.createElement("td");
        let columnValues4 = document.createElement("td");
        let columnValues5 = document.createElement("td");


        let columnValues4Link = document.createElement("a");
        columnValues4Link.href="update.html";

        let columnValues4LinkButton = document.createElement("button");
        columnValues4LinkButton.innerText = "Update Items"


        columnValues4Link.appendChild(columnValues4LinkButton);


        columnValues5.appendChild(columnValues4Link);


        // <td><a onclick="editItem('item5')" href="update.html"><button>Update Item</button</a></td>
       
        columnValues1.innerText = inputvalues[0];
        columnValues2.innerText = inputvalues[1];
        columnValues3.innerText=  inputvalues[2];
        let total = Number(inputvalues[1])* inputvalues[2];
        columnValues4.innerText = total;

        
        addNewItem.appendChild(columnValues1);
        addNewItem.appendChild(columnValues2);
        addNewItem.appendChild(columnValues3);
        addNewItem.appendChild(columnValues4);
        addNewItem.appendChild(columnValues5)

        addNewItem.setAttribute("id", `newItem_${inputvalues.length}`)
        const tableBody = document.querySelector("tbody");

        tableBody.appendChild(addNewItem);

       
    })
    
    

