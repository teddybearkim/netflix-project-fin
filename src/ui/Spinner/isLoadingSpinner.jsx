import Spinner from 'react-bootstrap/Spinner';
import '../Spinner/isLoadingSpinner.style.css';

function isLoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Spinner animation="border" size="lg" /> 
    </div>
  );
}


export default isLoadingSpinner;