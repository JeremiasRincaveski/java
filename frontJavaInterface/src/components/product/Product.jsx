import React, { useContext } from 'react'
import styled from 'styled-components'
import { Modal } from '../modal/Modal'
import { MyContext } from '../../context/MyContext'

const ContentWrapper = styled.div`

`

export const Product = () => {
    const { modalIsOpen } = useContext(MyContext);
    return (
        <Modal isOpen={modalIsOpen}>
            <ContentWrapper>
                <h1> Lozalize adione ou edite um produto</h1>
            </ContentWrapper>
        </Modal>
    )
}

