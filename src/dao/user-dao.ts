import { IUser } from "../models/user-model";
import User from "../schemas/user-schema";

export namespace UserDao {
  export async function registerUser(userData: IUser): Promise<string> {
    const saveUser = new User(userData);
    await saveUser.save();
    return await saveUser.createAccessToken("24 hours");
  }
  export async function loginUser(password: string, user: IUser): Promise<any> {
    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      var tokenString = await user.createAccessToken("24 hours");

      return {
        token: tokenString,
      };
    } else {
      throw new Error("Email and Password Combination Failed")
    }
  }
}
