import Router from './Router/router';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return <Router />;
}

export default App;
