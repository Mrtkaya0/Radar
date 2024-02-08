import { useEffect, useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import DetailModal from "./components/DetailModal";


const App = () => {
  
  const [İsMapwiew, setIsMapView] = useState (true);
  const [İsModalOpen, setIsModalOpen] = useState (false);
  const [detailId, setDetailId] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => dispatch(getFlights ()),5000)
    
  }, []);

  // modelı açma

  const openModal = (id) => {
    setDetailId(id);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  }

  return (

    <>

    <Header/>

    <div className="view-buttons" >
      {/* harita bölümü */}
      <button className={İsMapwiew ? 'active' : ''} 
      onClick={() => setIsMapView(true)}>
        Harita Görünümü
        </button>
      
      <button className={İsMapwiew ? '' : 'active'} 
      onClick={() => setIsMapView(false)}>
        Liste Görünümü
        </button>
      
      </div>

      {İsMapwiew ? (
      <MapView openModal={openModal} /> 
      ):( <ListView openModal={openModal}/>
    )}

      {İsModalOpen && (
      <DetailModal close={closeModal} detailId={detailId}/>
      )}
    </>

    )
}

export default App