import AccidentForm from './pages/AccidentForm';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <AccidentForm />
    </>
  );
}

export default App;
