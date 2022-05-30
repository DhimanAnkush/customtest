import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import './App.css';
import { useState } from "react";

function App() {

  const [value, setvalue] = useState('')

  const onChange = (e) => {
    setvalue(e.target.value);
    console.log(value)
  }

  return (
    <div className="container">
      <Input size={'40px'} variant={'outline'} type={'text'} value={value} onChange={onChange}/>

      <Image src='https://images.pexels.com/photos/7280128/pexels-photo-7280128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
      alt='flower' width={'30%'} height={400} borderRadius={200} fit='cover'/>

      <Pagination />
    </div>
  );
}

export default App;
