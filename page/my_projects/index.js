let projects = {
    "task_reminder": {
        name: "Task Reminder",
        date: "17/04/2023",
        description: "a browser extension that remind you a piece of note u wrote after a youtube video finished"
    }
}

let result_div = document.createElement("div")

for (const [project_name, metadata] of Object.entries(projects)) {
    let project_div = document.createElement("div")

    let date = document.createElement("span")
    let title = document.createElement("span")
    let description = document.createElement("span")

    date.innerHTML = metadata.date
    title.innerHTML = metadata.name
    description.innerHTML = metadata.description

    date.className = "text date card-text"
    title.className = "text name card-text"
    description.className = "text desc card-text"

    project_div.appendChild(date)
    project_div.appendChild(title)
    project_div.appendChild(description)

    project_div.style = "display: flex; flex-direction: column; justify-content: left; align-items: flex-start; word-break: break-word;"
    project_div.className = "project"

    project_div.addEventListener("click", (event) => {
        window.location.href = "https://twowr.github.io/page/my_projects/projects/" + project_name;
    })

    result_div.appendChild(project_div)
}

document.getElementsByClassName("focus-body")[0].appendChild(result_div)