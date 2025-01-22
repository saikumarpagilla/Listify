const searchInput = document.getElementsByClassName('search-input')[0]
const tasks = document.getElementsByClassName('task-wrapper')
searchInput.addEventListener('keyup', (e)=>{
    let inputValue = searchInput.value.toLocaleLowerCase()
    if (inputValue.trim() === ""){
        for (let i = 0; i < tasks.length ; i++){
            tasks[i].style.display = 'flex'
        }
    }else {
        let selected = []
        for (let i = 0; i < tasks.length; i++){
            const taskLabel = tasks[i].getElementsByClassName('task-name')[0].innerHTML.toLocaleLowerCase()
            if (taskLabel.includes(inputValue)){
                const selectedTask = tasks[i]
                selectedTask.style.display = 'flex'
                selected.push(i)
            }
        }

        for (let i = 0 ; i < tasks.length;i ++){
            if (selected.includes(i) === false){
                const unSelectedTask = tasks[i]
                unSelectedTask.style.display = 'none'
            }
        }
    
    }
})