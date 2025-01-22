$(document).ready(function(){
    // display all task
    function displayAllTask(isFirst){
        // get newest local storage
        fetchLocal = JSON.parse(localStorage.getItem('task_list'));

        // define new element
        let newElement;
        let parentElement = $(".task-list:first");

        parentElement.html("");
        
        // check if local storage already or not
        if(fetchLocal !== null){
            // get every object of list from local storage
            for(let i = 0; i < fetchLocal.length; i++){
                let attrCb;
                if(fetchLocal[i].checked == true){
                    attrCb = 'checked';                    
                }else{
                    attrCb = '';
                }
                newElement = $(`<div class = 'task-wrapper'><input type='checkbox' ${attrCb} class='task-checkbox' name= 'task-${i}' id='task-${i}'><label for='task-${i}' class='actual-cekbox'></label><label for='task-${i}' class='task-name'>${fetchLocal[i].task}</label><i class="ri-close-line"></i></div>`);
                parentElement.append(newElement);
            }
            // update in other section
            updateTask();
        }

        if(isFirst == false){
            // update list checkbox
            $(".task-checkbox").each(function (index, element) {
                $(element).change(function(){
                    chekBoxClick(element, index);
                });
            });
    
            // get update every delete icon
            $(".ri-close-line").each(function (index, element){
                $(element).click(function(){
                    deleteTask(index);
                });
            });
        }


    }

    function updateTask(){
        // get newest local storage
        fetchLocal = JSON.parse(localStorage.getItem('task_list'));

        // define new element
        let newElement;
        let parentElement_delayed = $($(".task-list")[1]);
        let parentElement_completed = $($(".task-list")[2]);

        // counter
        completeCount = 0;
        delayedCount = 0;

        parentElement_delayed.html("");
        parentElement_completed.html("");

        // get every object of list from local storage
        for(let i = 0; i < fetchLocal.length; i++){
            if(fetchLocal[i].checked === true){
                completeCount++;
                newElement = $(`<div class = 'task-wrapper'><i class="ri-check-line"></i> <p class='task-name'>${fetchLocal[i].task}</p></div>`);
                parentElement_completed.append(newElement);
            }else{
                delayedCount++;
                newElement = $(`<div class = 'task-wrapper'><i class="ri-time-line"></i> <p class='task-name'>${fetchLocal[i].task}</p></div>`);
                parentElement_delayed.append(newElement);
            }
        }


    }

    // display all task when browser is loaded
    displayAllTask(true);

    // add task
    $(".submit-btn").click(function(){
        let inputedTask = $("#input-task");

        if(inputedTask.val() !== ""){
            // get local storage
            fetchLocal = JSON.parse(localStorage.getItem('task_list'));

            // make new task object
            let newObjTask = {task: inputedTask.val(), checked: false};
            let arrObjTask;

            // check if local storage already or not
            if (fetchLocal  === null){
                // make new array object to local storage
                arrObjTask = [];
            }else{
                // get item 
                arrObjTask = JSON.parse(localStorage.getItem('task_list'));	
            }

            // add task object to local storage
            arrObjTask.push(newObjTask);
            localStorage.setItem('task_list',JSON.stringify(arrObjTask));
     
            // close modal
            $(".add-task-modal").fadeOut(200);
     
            // reset input
            inputedTask.val("");

            // display newest task to screen
            displayAllTask(false);

            // update stats
            updateStats();
        }
    });

    function chekBoxClick(elmt, idx){
        // get local storage
        fetchLocal = JSON.parse(localStorage.getItem('task_list'));
        
        // check the checkbox
        if(elmt.checked === true){
            fetchLocal[idx].checked = true;
        }else {
            fetchLocal[idx].checked = false;
        }

        // update local storage
        localStorage.setItem('task_list',JSON.stringify(fetchLocal));

        // update in orther section
        updateTask();

        // update stats
        updateStats();
    }

    // get every task event
    $(".task-checkbox").each(function (index, element) {
        $(element).change(function(){
            chekBoxClick(element, index);
        });
    });


    function deleteTask(idx){
        // get local storage
        fetchLocal = JSON.parse(localStorage.getItem('task_list'));

        // delete in spesific index
        fetchLocal.splice(idx,1);

        // update local storage
        localStorage.setItem('task_list',JSON.stringify(fetchLocal));

        // update display
        displayAllTask(false);

        // update stats
        updateStats();
    }

    // get every delete 
    $(".ri-close-line").each(function (index, element){
        $(element).click(function(){
            deleteTask(index);
        });
    });


    // update stats
    function updateStats(){   
        // get all task
        countAll = $(".section-2 .task-wrapper").length;
        
        // get delayed task
        countDelay = $(".hidden-section-1 .task-wrapper").length;

        // get completed teas
        completeCount = $(".hidden-section-2 .task-wrapper").length;

        $(".count-task .number").html(countAll);
        $(".count-active .number").html(countDelay);
        $(".count-completed .number").html(completeCount);

        // ilustration info
        if(countAll === 0){
            $(".section-2 .task-list").html("<div class = 'stat-ilus'><img src='img/No_task.svg' alt='' class ='ilus'><p class = 'ilus-info'>No Task Added</p></div>");
        }
        if(countDelay === 0){
            $(".hidden-section-1 .task-list").html("<div class = 'stat-ilus'><img src='img/Completed _Task.svg' alt='' class ='ilus'><p class = 'ilus-info'>No Delayed Task</p></div>");
        }
        if(completeCount === 0){
            $(".hidden-section-2 .task-list").html("<div class = 'stat-ilus'><img src='img/No_completed_Task.svg' alt='' class ='ilus'><p class = 'ilus-info'>No Completed Task</p></div>");
        }
    }

    updateStats()
})

