



import Search from './component/searchComponent';
import Footer from './component/footer';
import getDataHome from './lip/getDataHome';
import MenuTool from './component/menuTool';
import TopEmployers from './component/topEmployers';

export default  async function HomePage() {
 
  const dataHome: Promise<DataHome> = await getDataHome()
  const data = await dataHome
  

  return (    

    <div className="pt-px95">

      <Search dataSearch={data.dataSearch}/>

      <MenuTool listTool={data.listTool} />

      <TopEmployers listTopEmployers={data.listTopEmployers}/>
      
      <Footer/>

  </div>
  
  )
    
  
}
