import './App.css'
import {postsData} from '../public/data';
import { PostGrid } from './components/PostGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <hr />
      <PostGrid clasName="carta" posts={postsData} />
      <Footer/>
    </>
  );
}

export default App
