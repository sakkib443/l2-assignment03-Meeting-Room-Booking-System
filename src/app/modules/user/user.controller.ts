
import { UserServices } from './user.service';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const CreateUserController = catchAsync(async (req, res) => {
  const result = await UserServices.CreateUserService(req.body);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});

// const LoginUserController:RequestHandler = async(req,res,next)=>{
//   try {
//     const result = await UserServices.LoginUserService(req.body);
//     res.status(httpStatus.OK).json({
//       success: true,
//       message: "User logged in successfully",
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// }

export const UserController = {
  CreateUserController,
  // LoginUserController
};
