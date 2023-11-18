import { LoginInfo } from "@/app/lip/models/product";

interface DataLogin {
    email: string,
    idUser: string,
    name: string,
    password: string,
    role: string
}

export const  checkRole = async function(email: string) {


  try {
      const dataLogin: DataLogin | null = await LoginInfo.findOne({email: email});
      if(!dataLogin) return null;
      return {
        role: dataLogin.role,
        idUser: dataLogin.idUser
      }   

    } catch (error) {
      return null
  }

 

}


