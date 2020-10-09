import React from 'react';
import styled from '@emotion/styled';
import { palabraCapitalize } from './../helpers';

const ContenedorResumen = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: white;
	margin-top: 2rem;
`;

const DatoSpan = styled.span`
  font-weight: bold;
`;

function Resumen({ datos }) {
	const { marca, anio, plan } = datos;

	if (marca === '' || (anio === '') | (plan === '')) return null;

	return (
		<ContenedorResumen>
			<h2>Resumen</h2>
			<ul>
				<li>
					<DatoSpan>Marca:</DatoSpan> {palabraCapitalize(marca)}
				</li>
				<li>
					<DatoSpan>Año del auto:</DatoSpan> {palabraCapitalize(anio)}
				</li>
				<li>
					<DatoSpan>Plan:</DatoSpan> {palabraCapitalize(plan)}
				</li>
			</ul>
		</ContenedorResumen>
	);
}

export default Resumen;
