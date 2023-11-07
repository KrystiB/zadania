function retrieve_seconds(task) {
    const createdTask = new Date(task.created_task);
    let endDate = new Date();
    if (task.end_task) {
        endDate = new Date(task.end_task)
    }

    const seconds = (endDate - createdTask) / 1000
    return seconds;
}

const first_case = {
    'name': 'first_case',
    'created_task': '2021-10-26T19:48:12+00:00',
    'end_task': null
}
const second_case = {
    'name': 'second_case',
    'created_task': '2021-09-26T19:48:12+00:00',
    'end_task': '2021-10-26T19:48:12+00:00'
}
console.log(retrieve_seconds(first_case))
console.log(retrieve_seconds(second_case))