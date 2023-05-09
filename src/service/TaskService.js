import axios from "axios";

export default class TaskService {
    static async getAll() {
        let tasks = await axios.get("http://localhost:8080/tasks/");
        return tasks.data;
    }

    static async save(task) {
        await axios.post("http://localhost:8080/tasks/", task);
    }
}