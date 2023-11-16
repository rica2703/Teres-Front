import CrearCuenta from "../moleculas/crearCuenta";
import IniciarSesion from "../moleculas/iniciarSesion";
import style from '../../style/main.css';
import React, { useState } from "react";
import Modal from 'react-modal';
function FormulariosRegistrarIniciar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="contenedorDosFormularios">
            <div className="contenedorHijo">
                <div className="fondoRosa">
                    <br /><br />
                    <IniciarSesion onClick={openModal} />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear Cuenta Modal" style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                    },
                    content: {
                        transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out', // Aplicar transiciones a transform y opacidad
                        backgroundColor: 'rgba(17, 17, 17, 0)',
                        border: 'none',
                        top: '50%',
                        height: '600px',
                        left: '50%',
                        transform: `translate(-50%, ${modalIsOpen ? '-50%' : '-150%'})`, // Mover hacia arriba en el cierre
                        width: '100%',
                        maxWidth: '400px',
                        padding: '10px',
                        opacity: modalIsOpen ? '1' : '0', // Mostrar u ocultar el modal con opacidad
                        pointerEvents: modalIsOpen ? 'auto' : 'none' // Hacer que el modal sea clickeable solo cuando esté abierto
                    }
                }}>
                    <div className="contenedorHijo2">
                <div className="fondoRosa"><br /><br />
                <CrearCuenta onClick={closeModal} />
                </div>
                </div>
            </Modal>
        </div>
    );
}
export default FormulariosRegistrarIniciar;