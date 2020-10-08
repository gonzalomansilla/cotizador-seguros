import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
`;

const InputRadio = styled.input`
	margin: 0 0.5rem 0 1.5rem;
`;

const Formulario = () => {
	return (
		<form>
			<Campo>
				<Label htmlFor='marca'>Marca</Label>
				<Select name='marca' id='marca'>
					<option value=''>-- Seleccione --</option>
					<option value='americano'>Americano</option>
					<option value='europeo'>Europeo</option>
					<option value='asiatico'>Asiatico</option>
				</Select>
			</Campo>

			<Campo>
				<Label htmlFor='anio'>Año</Label>
				<Select name='anio' id='anio'>
					<option value=''>-- Seleccione --</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
					<option value='2017'>2017</option>
					<option value='2016'>2016</option>
					<option value='2015'>2015</option>
					<option value='2014'>2014</option>
					<option value='2013'>2013</option>
					<option value='2012'>2012</option>
				</Select>
			</Campo>

			<Campo>
				<Label htmlFor='plan'>Plan</Label>
				<label htmlFor='plan-basico'>
					<InputRadio id='plan-basico' type='radio' name='plan' value='basico' />
					Básico
				</label>
				<label htmlFor='plan-completo'>
					<InputRadio id='plan-completo' type='radio' name='plan' value='completo' />
					Completo
				</label>
			</Campo>
		</form>
	);
};

export default Formulario;
