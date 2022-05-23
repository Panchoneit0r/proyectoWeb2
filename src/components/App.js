import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Timer from './Timer/Timer'

function App() {
  return (
    <div className="App">
      <Header title="Timer" url="https://www.youtube.com/watch?v=H6LLfczz8hM"/>
        <Content>
         <Timer/>
        </Content>
      <Footer />
    </div>
  );
}

export default App;
