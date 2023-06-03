import { useContext, useState } from "react"
import { api } from "../../services/api"
import { MyContext } from "../../context/MyContext";
import { Button, Input, Modal } from "@mui/material";
import { ContentForm } from "../styles/GlobalStyles";

const EditProduct = ({teste}) => {
    // parte do modal
    const { editItemModal } = useContext(MyContext);
    // const disabled = cod && nome && valor ;
    // parte das informações do produto
    const [cod, setCod] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');

    // 
    const handleInputChange = (event) => {
        const date = new Date;
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (month < 10) {
            month = '0' + month;
        }

        const formattedDate = day + '/' + month + '/' + year
        const { name, value } = event.target;
        
        if (name === 'cod') {
            setCod(value);
            console.log(value)
        } else if (name === 'nome') {
            setNome(value);
            console.log(value)
        } else if (name === 'valor') {
            setValor(value);
            console.log(value)
        } else if (name === 'estoque') {
            setEstoque(value);
            console.log(value)
        } 
        setDataCadastro(formattedDate);
    };
    
    const handleSubmit = () => {
        // Criação do objeto com os dados coletados do formulário
        const novoItem = {
            // cod,
            name: nome,
            price: valor,
            stock: estoque,
            date: dataCadastro,
        };

        // Envio da solicitação POST para a API
        api.put(`/product/${cod}`, novoItem)
        .then((response) => {
            console.log('Item modificado com sucesso:', response.data);
        })
        .catch((error) => {
            console.error('Erro ao modificar o item:', error);
        });

    };

    
    api.get(`/product/${teste}`).then((response) => {
        setCod(response.data.id)
        setNome(response.data.name)
        setValor(response.data.price)
        setEstoque(response.data.stock)
        setDataCadastro(response.data.date)
    })
    
    return (
        <Modal>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        </Modal>
        // <Modal>
        //     <ContentForm onSubmit={handleSubmit}>
        //         <div>
        //             <Input label={'código'} name={'cod'} value={cod} type={'number'} onChange={handleInputChange} />
        //             <Input label={'nome'} name={'nome'} value={nome} onChange={handleInputChange} />
        //             <Input label={'valor unitário'} name={'valor'} value={valor} onChange={handleInputChange} />
        //             <Input label={' qt. estoque'} name={'estoque'} value={estoque}  onChange={handleInputChange} />
        //             <Input label={'data de cadastro'} name={'dataCadastro'} value={dataCadastro} onChange={handleInputChange} disabled={true}  id={'last'}/>
        //         </div>
        //         <Button
        //             wSize={'430px'}
        //             bgColor={'black'}
        //             fColor={'white'}
        //             style={{ alignSelf: 'flex-end' }}
        //             type={'submit'}
        //             disabled={false}
        //         />
        //     </ContentForm>
        // </Modal>
    )
}

export default EditProduct