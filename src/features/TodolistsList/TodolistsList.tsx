import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {changeTodolistFilterAC, FilterValuesType, TodoListDomainType} from "./todolists-reducer";
import React, {useCallback, useEffect} from "react";
import {TaskStatuses} from "../../api/todolists-api";
import {Grid, Paper} from "@mui/material";
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import TodoList from "./Todolist/TodoList";
import {TasksStateType} from "../../app/App";
import {Navigate} from "react-router-dom";
import {fetchAddTodolist, fetchChangeTodolistTitle, fetchFetchTodolists, fetchRemoveTodolist} from "./todolists-sagas";
import {fetchAddTasks, fetchRemoveTask, fetchUpdateTask} from "./tasks-sagas";

type PropsType = {
    demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({demo = false}) => {
    const todoLists = useSelector<AppRootStateType, TodoListDomainType[]>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        if (demo || !isLoggedIn) {
            return
        }
        const action = fetchFetchTodolists();
        dispatch(action)
    }, [])

    const removeTask = useCallback((taskID: string, todoListID: string) => {
        const action = fetchRemoveTask(taskID, todoListID)
        dispatch(action)
    }, [])

    const addTask = useCallback((title: string, todoListID: string) => {
        const action = fetchAddTasks(title, todoListID)
        dispatch(action)
    }, [])

    const changeTaskStatus = useCallback((taskID: string, status: TaskStatuses, todoListID: string) => {
        const action = fetchUpdateTask(taskID, {status}, todoListID)
        dispatch(action)
    }, [])

    const changeTaskTitle = useCallback((taskID: string, taskTitle: string, todoListID: string) => {
        const action = fetchUpdateTask(taskID, {title: taskTitle}, todoListID)
        dispatch(action)
    }, [])

    const changeTodoListFilter = useCallback((filter: FilterValuesType, todoListID: string) => {
        const action = changeTodolistFilterAC(filter, todoListID)
        dispatch(action)
    }, [])

    const removeTodoList = useCallback((todoListID: string) => {
        const action = fetchRemoveTodolist(todoListID)
        dispatch(action)
    }, [])

    const changeTodoListTitle = useCallback((title: string, todoListID: string) => {
        const action = fetchChangeTodolistTitle(title, todoListID)
        dispatch(action)
    }, [])

    const addTodoList = useCallback((title: string) => {
        const action = fetchAddTodolist(title)
        dispatch(action)
    }, [dispatch])

    if (!isLoggedIn) {
        return <Navigate to={'login'}/>
    }

    return (
        <>
            <Grid container style={{padding: "20px"}}>
                <AddItemForm addItem={addTodoList}/>
            </Grid>
            <Grid container spacing={3}>
                {
                    todoLists.map(tl => {
                        return (
                            <Grid item key={tl.id}>
                                <Paper style={{padding: "10px"}}>
                                    <TodoList
                                        key={tl.id}
                                        todolist={tl}
                                        tasks={tasks[tl.id]}
                                        removeTask={removeTask}
                                        changeFilter={changeTodoListFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeTaskStatus}
                                        removeTodoList={removeTodoList}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodoListTitle={changeTodoListTitle}
                                        demo={demo}
                                    />
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}