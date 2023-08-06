import Image from 'next/image'
import getUsers from './lip/getUsers'
export default  async function Home() {
  const dataUsers: Promise<Users[]> = getUsers()
  const data = await dataUsers
  console.log(data,'1111');
  
  
  return (
   <div>
  home page
   </div>
  )
}
