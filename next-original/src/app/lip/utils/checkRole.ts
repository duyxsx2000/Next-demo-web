const checkRole = async (email: string) => {
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
  };