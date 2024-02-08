import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';
import { useState } from "react";


const ListView = ({openModal}) => {

  const state = useSelector((store) => store.flight)
  // gösterilecek ilk elamanın dizideki sırası
  const [itemOffset, setItemOffset] = useState(0);
  // sayfa başına eleman sayısı
  const itemsPerPage = 10;
// gösterilecek sonuncu elemaın dizideki yeri
  const endOffset = itemOffset + itemsPerPage;
  // belirlenen aralıktaki elemanları seçer
  const currentItems = state.flights.slice(itemOffset, endOffset);
  // tolam sayfa sayısı bulma
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

// her yeni eleman seçtiğinde bunu state aktarır
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.flights.length;
    
    setItemOffset(newOffset);
  };
    return (
      <div className="p-4">
        <table className="table table-dark table-hover mt-5">
          <thead>
          <tr>
            <th>İD</th>
            <th>Kuyruk Kod</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {currentItems.map((flight) => 
         <tr>
          <td>{flight.id}</td>
          <td>{flight.code}</td>
          <td>{flight.lat}</td>
          <td>{flight.lng}</td>
          <td> <button onClick={()=> openModal(flight.id)}>Detay</button> </td>

         </tr> 
          )}
          </tbody>
        </table>
        <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        className="pagination"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< Geri"
      />
      </div>
    )
  }
  
  export default ListView