import * as React from 'react';
import { useState } from 'react';
import { apiService } from '../services/api-service';

const ContactPage: React.FC<ContactPageProps> = (props) =>{
	const [from, setFrom] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');

 const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
	e.preventDefault();
	apiService('/contact', 'Post',{from, subject, message})
	.then(res => res.json())
	.then(result => console.log(result));
 }

	return (
		<main className="container my-5">
			<section className="row justify-content-center">
			<h1 className='d-flex justify-content-center p-2'>Contact Me!</h1>
				<div className="col-md-6">
					<form className="form-group p3 border rounded shadow">
						<input value={from} placeholder='Your Email' onChange={e=> setFrom(e.target.value)} className="form-control" />
						<input value={subject} placeholder='Subject' onChange={e=> setSubject(e.target.value)} className="form-control" />
						<textarea value={message} placeholder='Message'onChange={e=> setMessage(e.target.value)} className="form-control" />
						<button onClick={handleSubmit} className="btn btn-primary">Contact me!</button>
					</form>
				</div>
			</section>
		</main>
	);
};

interface ContactPageProps {}


export default ContactPage;