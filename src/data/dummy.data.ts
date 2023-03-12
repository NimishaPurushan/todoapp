import { TodoTask } from "../types/task.type";
import { v4 as uuidv4 } from 'uuid';

const DummyTasks: TodoTask[] = [
  {
    id: uuidv4(),
    title: "Buy groceries",
    createdAt: new Date("2023-03-12T12:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Do laundry",
    createdAt: new Date("2023-03-11T10:00:00Z"),
    completedAt: new Date("2023-03-12T08:00:00Z"),
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Read book",
    createdAt: new Date("2023-03-10T14:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Pay bills",
    createdAt: new Date("2023-03-09T16:00:00Z"),
    completedAt: new Date("2023-03-11T14:00:00Z"),
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Exercise",
    createdAt: new Date("2023-03-08T08:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Call mom",
    createdAt: new Date("2023-03-07T11:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Write report",
    createdAt: new Date("2023-03-06T09:00:00Z"),
    completedAt: new Date("2023-03-08T16:00:00Z"),
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Plan vacation",
    createdAt: new Date("2023-03-05T13:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Walk the dog",
    createdAt: new Date("2023-03-04T15:00:00Z"),
    completedAt: new Date("2023-03-05T08:00:00Z"),
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Attend meeting",
    createdAt: new Date("2023-03-03T10:00:00Z"),
    completedAt: null,
    isCompleted: false,
  },
];

export default DummyTasks;