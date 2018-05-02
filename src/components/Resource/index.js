import CreateTaskAPI from './CreateTaskAPI'
import GetUserAPI from './GetUserAPI'
import GetSubordinateAPI from './GetSubordinate'
import GetTaskAPI from './GetTaskAPI'
import GetHistoryAPI from './GetHistoryAPI'
import EditUserAPI from './EditUserAPI'

export const createTaskAPI = new CreateTaskAPI()
export const getUserAPI = new GetUserAPI()
export const getSubordinateAPI = new GetSubordinateAPI()
export const getTaskAPI = new GetTaskAPI()
export const getHistoryAPI = new GetHistoryAPI()
export const editUserAPI = new EditUserAPI()