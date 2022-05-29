import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/sections/Header'

const PolleriaLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default PolleriaLayout


{/* <Header />
      <main>
        <section className="container-reservas container">
          <div className="container-reservas__reserva">
            <ReservasForm
              submitReserva={submitReserva}
            />
            <ReservasReservas
              reservas={reservas}
            />
          </div>
        </section>
      </main> */}