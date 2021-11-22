import { PricePlot } from "./PricePlot";
import 'antd/dist/antd.css';

function App() {
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>SF Apartment Prices (two bed)</h1>
      <PricePlot/>
    </div>
  );
    
}

export default App;
