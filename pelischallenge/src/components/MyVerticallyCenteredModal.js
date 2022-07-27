import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import useMovies from '../hook/useMovies';

function MyVerticallyCenteredModal(props) {

    const {getInfoId, infoId} = useMovies()


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {infoId.original_title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >

        <img src={`https://image.tmdb.org/t/p/original/${infoId.backdrop_path}`} alt="" className='card-img-top'/>
        <h4 className='mt-4'> {infoId.title}</h4>
        <p><strong>Sinopsis: </strong> {infoId.overview} </p>
        <p><strong>Fecha de Lanzamiento: </strong> {infoId.release_date} </p>
        <p><strong>Duración: </strong> {infoId.runtime}min  </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyVerticallyCenteredModal