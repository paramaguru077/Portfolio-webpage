import { useState,useRef } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
 
    const[input,setInput]= useState({
        name:"",
        email:"",
        message:"",
    });
    const handleSubmit =(e)=>{ // handel code here
        e.preventDefault();
        e.target.reset();
        emailjs.sendForm('service_wf475to', 'template_9ezvasf', form.current, {
          publicKey: 'De2-Uhc1muLpXq_Cg',
        })
        

        .then(
          (res) => {
            console.log(res.text);
            setInput("");
            

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    const handleChange =(e)=>{
        const{name,value}= e.target;
        setInput({...input,[name]:value});
    }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={input.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={input.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;