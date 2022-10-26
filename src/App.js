import Caroulsel from './components/Caroulsel';
import Navbar from './components/Navbar'
import Content from './components/Content';
import Content2 from './components/Content-2';
import Footer from './components/Footer';

import { firestore } from './firebase';
import { addDoc, collection, orderBy } from "@firebase/firestore";

const ref = collection(firestore, "receitas");
console.log(ref);

function App() {
  return (
    <div className="w-screen h-screen bg-brown-300 overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <Caroulsel />
      <div className="h-[430px] flex justify-center bg-brown-100 drop-shadow-lg">
        <Content />
      </div>
      <div className="h-[730px]  flex justify-center bg-brown-300">
        <Content2 />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
