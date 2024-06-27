import './style.scss';
import Container from './components/Container.js'
// import {internalIpV4} from 'internal-ip'
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   console.log("local", getLocalIp())
  // }, [])
  // async function getLocalIp() {
  //   console.log('Local Ip', await internalIpV4())
  // }

  return (
    <Container/>
  );
}

export default App;
