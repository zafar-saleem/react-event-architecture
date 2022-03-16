import { Home } from './components/Home/Home';
import { Form } from './components/Form/Form';
import { EventBus } from './EventBus/EventBus';

window.Events = EventBus()();

function App() {
  return (
    <div>
    	<Form />
    	<Home />
    </div>
  );
}

export default App;
