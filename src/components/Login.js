import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';

export const Login = () => {
	const idRef = useRef();

	return (
		<Container>
			<Form>
				<Form.Group>
					<Form.Label>Enter your ID</Form.Label>
					<Form.Control type='text' ref={idRef} required></Form.Control>
				</Form.Group>
			</Form>
		</Container>
	);
};
