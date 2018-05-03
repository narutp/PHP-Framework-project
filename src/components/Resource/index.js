import CreateTaskAPI from './CreateTaskAPI'
import CreateLeaveAPI from './CreateLeaveAPI'
import GetUserAPI from './GetUserAPI'
import GetSubordinateAPI from './GetSubordinate'
import GetColleagueAPI from './GetColleagueAPI'
import GetTaskAPI from './GetTaskAPI'
import GetHistoryAPI from './GetHistoryAPI'
import EditUserAPI from './EditUserAPI'

export const createTaskAPI = new CreateTaskAPI()
export const createLeaveAPI = new CreateLeaveAPI()
export const getUserAPI = new GetUserAPI()
export const getSubordinateAPI = new GetSubordinateAPI()
export const getColleagueAPI = new GetColleagueAPI()
export const getTaskAPI = new GetTaskAPI()
export const getHistoryAPI = new GetHistoryAPI()
export const editUserAPI = new EditUserAPI()