import './App.css'
import Header from './components/Header'
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__itemContainer'>
        <Item 
          title='Lower Cost Solar Panels in America'
          desc='Money-back guarantee'
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        /> 
        <Item 
          title='Model S'
          desc='Money-back guarantee'
          backgroundImg={ModelS}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Model 3'
          desc='Money-back guarantee'
          backgroundImg={Model3}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        /> 
        <Item 
          title='Model X'
          desc='Money-back guarantee'
          backgroundImg={ModelX}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        /> 
        <Item 
          title='Model Y'
          desc='Money-back guarantee'
          backgroundImg={ModelY}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Solar Roof'
          desc='Money-back guarantee'
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        /> 
        <Item 
          title='Accessories'
          desc='Money-back guarantee'
          backgroundImg={Accessories}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
