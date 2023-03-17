import axios from "axios";

let link = "app-b8c6868d-af05-422d-b256-d4d1285370cb.cleverapps.io";

async function GetAll() {
  const data = await axios.get(`https://${link}/tasks`);
  return data.data;
}

async function InsertTask(title, description, date) {
  try {
    await axios.post(`https://${link}/tasks`, {
      title,
      description,
      date,
    });
    return false;
  } catch (error) {
    console.log("error insert");
    return true;
  }
}

async function DeleteTask(id) {
  try {
    await axios.delete(`https://${link}/tasks/${id}`);
  } catch (error) {
    console.log("error delete");
    return true;
  }
}

async function UpdateTask(id, title, description) {
  try {
    await axios.put(`https://${link}/tasks/${id}`, {
      title,
      description,
    });
  } catch (error) {
    console.log("error update");
    return true;
  }
}

export { GetAll, InsertTask, DeleteTask, UpdateTask };
