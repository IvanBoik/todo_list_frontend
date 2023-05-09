import React from 'react';
import trash from "../images/trash.svg"
import edit from "../images/edit.svg";
import grayEdit from "../images/edit-gray.svg";
import grayTrash from "../images/trash-gray.svg";

const Task = (props) => {

    const tasks = document.querySelectorAll(".task");
    for (let task of tasks) {
        const checkbox = task.querySelector(".task-check-mark");
        const [img, remove]= task.querySelectorAll(".task-button-image");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                task.classList.add("task-with-cross");
                task.classList.remove("task");
                img.setAttribute("src", grayEdit);
                remove.setAttribute("src", grayTrash);
            }
            else {
                task.classList.remove("task-with-cross");
                task.classList.add("task");
                img.setAttribute("src", edit);
                remove.setAttribute("src", trash);
            }
        });
    }

    return (
        <div className="task">
            <input type="checkbox" className="task-check-mark"/>
            <h2 className="task-name">{props.name}</h2>
            <p className="task-description">{props.description}</p>
            <p className="task-date">{props.date}</p>
            <button className="task-button">
                <img src={edit} alt="" className="task-button-image" id="1"/>
            </button>
            <button className="task-button">
                <img src={trash} alt="" className="task-button-image" id="2"/>
            </button>
        </div>
    );
};

export default Task;