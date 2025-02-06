
import './ToDoList.css'

function Todo() {

    function List(){
        const task = document.getElementById("todo-input").value.trim();
        
        if(task){
            //Create a new "li" element
            const li = document.createElement("li");
            li.innerText = task;

            //Append "li" inside "ul"
            const ul = document.querySelector(".display-section ul");
            ul.appendChild(li);

            //Create a delete button
            const delBtn = document.createElement("button");
            delBtn.className = "delBtn";
            delBtn.innerHTML = "<strong>X</strong>";
            delBtn.onclick = function () {
                li.remove();
            }

            //Append Delete button inside "li"
            li.appendChild(delBtn);

            //Create a checkbox for marking task completion
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            checkbox.onchange = function(){
                li.classList.toggle("completed"); 
            };

            //Append Checkbox inside "li"
            li.appendChild(checkbox);

            //Input will be removed after added to the list
            document.getElementById("todo-input").value = "";

        }
        
    }

    

    return (
        <div className='main'>
            <div className='heading'>
                <h1><u>ToDo List</u></h1>
            </div>
            <div className='work-section'>
                <div className='input-section'>
                    <label htmlFor='todo-input'>
                        <input type='text' placeholder='Enter Here' id='todo-input'></input>

                        <button type='submit' id='btn' onClick={List}>Add</button>
                    </label>
                </div>

                <div className='display-section'>
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Todo;