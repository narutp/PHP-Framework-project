import CreateTaskAPI from './CreateTaskAPI'
import CreateLeaveAPI from './CreateLeaveAPI'
import GetUserAPI from './GetUserAPI'
import GetSubordinateAPI from './GetSubordinate'
import GetColleagueAPI from './GetColleagueAPI'
import GetTaskAPI from './GetTaskAPI'
import GetHistoryAPI from './GetHistoryAPI'
import EditUserAPI from './EditUserAPI'
import CreateUserAPI from './CreateUserAPI'
import ManageUserAPI from './ManageUserAPI';
import GetUsersAPI from './GetUsersAPI'
import SetDepartmentAPI from './SetDepartmentAPI'
import GetLeavesRequestAPI from './GetLeavesRequestAPI'
import ConfirmLeaveRequestAPI from './ConfirmLeaveRequestAPI'

export const createTaskAPI = new CreateTaskAPI()
export const createLeaveAPI = new CreateLeaveAPI()
export const confirmLeaveRequestAPI = new ConfirmLeaveRequestAPI()
export const getUserAPI = new GetUserAPI()
export const getSubordinateAPI = new GetSubordinateAPI()
export const getColleagueAPI = new GetColleagueAPI()
export const getTaskAPI = new GetTaskAPI()
export const getHistoryAPI = new GetHistoryAPI()
export const getLeavesRequestAPI = new GetLeavesRequestAPI()
export const editUserAPI = new EditUserAPI()
export const createUserAPI = new CreateUserAPI()
export const getUsersAPI = new GetUsersAPI()
export const manageUserAPI = new ManageUserAPI()
export const setDepartmentAPI = new SetDepartmentAPI()
