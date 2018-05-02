import CreateTaskAPI from './CreateTaskAPI'
import GetUserAPI from './GetUserAPI'
import GetSubordinateAPI from './GetSubordinate'
import EditUserAPI from './EditUserAPI'
import CreateUserAPI from './CreateUserAPI'
import ManageUserAPI from './ManageUserAPI';
import GetUsersAPI from './GetUsersAPI'
import SetDepartmentAPI from './SetDepartmentAPI'

export const createTaskAPI = new CreateTaskAPI()
export const getUserAPI = new GetUserAPI()
export const getSubordinateAPI = new GetSubordinateAPI()
export const editUserAPI = new EditUserAPI()
export const createUserAPI = new CreateUserAPI()
export const getUsersAPI = new GetUsersAPI()
export const manageUserAPI = new ManageUserAPI()
export const setDepartmentAPI = new SetDepartmentAPI()
