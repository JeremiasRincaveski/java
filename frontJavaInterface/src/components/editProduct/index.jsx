import React, { useContext, useState } from 'react';
import { api } from '../../services/api';
import { MyContext } from '../../context/MyContext';

export const EditProduct = () => {
  const { item, setItem } = useContext(MyContext);
  const [editingItemId, setEditingItemId] = useState('');
  const [inputValues, setInputValues] = useState({
    nome: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEditClick = (itemId) => {
    setEditingItemId(itemId);
    const currentItem = item.find((item) => item.id === itemId);
    setInputValues({
      nome: currentItem.nome,
    });
  };

  const handleEditSubmit = (itemId) => {
    const updatedItem = {
      id: itemId,
      nome: inputValues.nome,
    };

    api.put(`/products/${updatedItem.id}`, updatedItem)
      .then(() => {
        const updatedItems = item.map((item) =>
          item.id === itemId ? updatedItem : item
        );
        setItem(updatedItems);
        setEditingItemId('');
        setInputValues({
          nome: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao atualizar o item:', error);
      });
  };

  return (
    <div>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.id === editingItemId ? (
              <>
                <input
                  name="nome"
                  value={inputValues.nome}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleEditSubmit(item.id)}>
                  Salvar
                </button>
              </>
            ) : (
              <>
                {item.nome}
                <button onClick={() => handleEditClick(item.id)}>
                  Editar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
