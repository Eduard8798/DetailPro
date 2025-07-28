'use client'
import React, {useEffect, useState} from 'react';
import styles from './FeedbackForm.module.css'
const Page = () => {

    const [form,setForm] = useState({
        name:'',phone:'',message:''
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleChange = (event) => {
        const { name ,value } = event.target;
        setForm (prevState => ({
            ...prevState,[name]:value
            })
        )
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(null);
        setError(null);
        try {
            const res = await fetch('/api/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();


            if (res.ok) {
                setSuccess('Заявка отправлена ✅');
                setForm({ name: '', phone: '', message: '' });
            } else {
                throw new Error(data.error || 'Ошибка при отправке');
            }
        } catch (err) {
            setError(err.message || 'Что-то пошло не так');
        }
    }

    useEffect(() => {
        console.log('form',form)
    }, [form]);
    return (
        <div className={styles.contact_section}>
            <div className={styles.map_container}>
                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d713.9926357424695!2d32.069604018287265!3d49.41077592193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d49.41052824587658!2d32.06955975440797!5e0!3m2!1sru!2sua!4v1751143260657!5m2!1sru!2sua"
                    // width="600" height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={styles.contact_info}>
                <h2 className={styles.contact_title}>Time to visit us</h2>
                <p className={styles.contact_subtitle}>Welcome to our showroom</p>

                <form className={styles.contact_form}>
                    <input type="text" name='name' placeholder="Your Name"
                           className={styles.input}
                           value={form.name}
                           onChange={handleChange}
                   />
                    <input type="tel" name='phone' placeholder="Phone Number" className={styles.input}
                    value={form.phone}
                           onChange={handleChange}
                    />
                    <textarea placeholder="Your Message" className={styles.textarea}
                    name='message'
                              value={form.message}
                              onChange={handleChange}
                    ></textarea>
                    {!form.name || !form.phone  ?  <button type="submit" className={styles.submit_btn}>Fill in the field</button>
                    :
                        <button type="submit" className={styles.submit_btn}
                        onClick={handleSubmit}
                        >Send Message</button>
                    }

                    {success && <p className="text-green-600">{success}</p>}
                    {error && <p className="text-red-600">{error}</p>}
                </form>
            </div>
        </div>


    );
};

export default Page;

