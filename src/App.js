import './App.css';
import React from 'react';
import { useEffect, useRef } from 'react';

export const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;
    console.log(el2);

    let form = document.getElementById("form");
    let textInput = document.getElementById("textInput");
    let dateInput = document.getElementById("dataInput");
    let textarea = document.getElementById("textarea")
    let msg = document.getElementById("msg");
    let tasks = document.getElementById("tasks");
    let add = document.getElementById("add");

    //form validation
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formValidation();
    });

    let formValidation = () => {
      if (textInput.value === ""){
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
      }
      else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
          add.setAttribute("data-bs-dismiss", "");
        })();
      }
    };
    //collect data
    let data = [];

    let acceptData = () => {
      data.push({
        text: textInput?.value || '',
        date: dateInput?.value || '',
        description: textarea?.value || '',
      });

      localStorage.setItem("data", JSON.stringify(data));

      console.log(data);
     createTasks();
    }

    //create new tasks
    let createTasks = () => {
      tasks.innerHTML = "";
      data.map((x, y) => {
        return (tasks.innerHTML += `
        <div id=${y}> 
              <span class="fw-bold">${x.text}</span>
              <span class="small text-secondary">${x.date}</span>
              <p>${x.description}</p>
      
              <span class="options">
                <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-trash"></i>
              </span>
            </div>
        `);
      });
    
      resetForm();
    };
    let resetForm = () => {
      textInput.value = "";
      dateInput.value = "";
      textarea.value = "";
    };
    //delete a task
    let deleteTask = (e) => {
      e.parentElement.parentElement.remove();
    
      data.splice(e.parentElement.parentElement.id, 1);
    
      localStorage.setItem("data", JSON.stringify(data));
    
      console.log(data);
      
    };
//edit a task
let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

  })
  return (

    <React.Fragment>
      <div className='bg-neutral-300 w-full h-screen grid'>

        <div className='bg-white text-neutral-700 m-auto border-4 border-blue-400 w-5/6 md:w-1/3 h-5/6 rounded-lg'>
          <div className='px-3 py-3'>
            <p className='font-bold text-3xl'>TODO App</p>
            <br/>
            <div id="addNew" className='flex justify-between align-items-center bg-blue-200 px-3 py-2 rounded-md cursor-pointer' data-bs-toggle="modal" data-bs-target="#form">
              <span className='text-xl'>Add New Task </span>
              <i class="fa-solid fa-plus bg-blue-300 p-2 rounded" ></i>
            </div>
          </div>
          <p className='my-3 px-3 text-2xl text-center font-medium'>Tasks</p>
          <div id="tasks"></div>

          <form className='modal fade'
            id="form"
            tabIndex="-1"
            aria-labelledby="exampleModelLabel"
            aria-hidden="true">

            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id="exampleModalLabel">Add New Task</h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss="modal"
                    aria-label='Close'></button>
                </div>
                <div class="modal-body">
                  <p>Task Title</p>
                  <input type="text" class="form-control" name="" id="textInput" />
                  <div id="msg" className='tex-red-500'></div>
                  <br />
                  <p>Due Date</p>
                  <input type="date" class="form-control" name="" id="dateInput" />
                  <br />
                  <p>Description</p>
                  <textarea
                    name=""
                    class="form-control"
                    id="textarea"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary bg-blue-600" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" id="add" class="btn btn-primary bg-neutral-600">Add</button>
                </div>
              </div>
            </div>



          </form>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
