import './App.css';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <div className='bg-neutral-300 w-full h-screen grid'>

        <div className='bg-white text-neutral-700 m-auto border-4 border-blue-400 w-5/6 md:w-1/4 h-4/6 rounded-lg'>
          <div className='px-5 py-3'>
            <p className='font-bold text-3xl'>TODO App</p>
            <div id="addNew" data-bs-toggle="modal" data-bs-target="#form">
              <span>Add New Task</span>

            </div>
          </div>
          <p className='my-3'>Tasks</p>
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
                  <div id="msg"></div>
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
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" id="add" class="btn btn-primary">Add</button>
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
