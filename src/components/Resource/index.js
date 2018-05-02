import CreateTaskAPI from './CreateTaskAPI'
import GetUserAPI from './GetUserAPI'
import GetSubordinateAPI from './GetSubordinate'
import EditUserAPI from './EditUserAPI'

export const createTaskAPI = new CreateTaskAPI()
export const getUserAPI = new GetUserAPI()
export const getSubordinateAPI = new GetSubordinateAPI()
export const editUserAPI = new EditUserAPI()