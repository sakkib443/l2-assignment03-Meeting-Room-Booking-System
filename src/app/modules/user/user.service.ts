import { TUser } from "./user.interface";
import { User } from "./user.model";


const CreateUserService = async(payLoad:TUser) =>{
    const result = await User.create(payLoad)
    return result
}

export const UserServices = {
    CreateUserService
}