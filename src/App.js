
import { useDispatch, useSelector } from "react-redux";
import { hideModalAction, showModalAction } from "./actions/modal";
import "./App.css";
import CustomModal from "./components/modal/CustomModal";

function App() {

  const dispatch = useDispatch()
  const show = useSelector(state => state.modal.show)
  

  const openModal = () => dispatch(showModalAction())
  const closeModal = () => dispatch(hideModalAction())
  
  return (
    <div className="App">
      <button className="clickme" onClick={() => openModal()}>
        Modal
      </button>
      <CustomModal show={show} title="My Modal Title" close={closeModal} >
          <p>
            my content some more content xyz .
            my content some more content xyz .
            my content some more content xyz .
          </p>
      </CustomModal>
    </div>
  );
}

export default App;
