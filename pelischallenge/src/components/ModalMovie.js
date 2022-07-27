import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import React from 'react'
import useMovies from '../hook/useMovies'

function ModalMovie() {

    const {showModal,getShowModal} = useMovies()

  return (
    <div>
              <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => getShowModal()}
      />
    </div>
  )
}

export default ModalMovie