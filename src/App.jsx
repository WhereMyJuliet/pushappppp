import React, { useState } from "react";
import './index.css';

const App = () => {
    const [email, setEmail] = useState("");
    const [fio, setFio] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");

    const [emailDirty, setEmailDirty] = useState(false);
    const [fioDirty, setFioDirty] = useState(false);
    const [phoneNumberDirty, setPhoneNumberDirty] = useState(false);
    const [ageDirty, setAgeDirty] = useState(false);

    const [emailError, setEmailError] = useState("Поле должно быть заполнено");
    const [fioError, setFioError] = useState("Поле должно быть заполнено");
    const [phoneNumberError, setPhoneNumberError] = useState("Некорректный номер телефона (Пример: +996 709 10-82-77)");
    const [ageError, setAgeError] = useState("Поле должно быть заполнено");

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(value).toLowerCase())){
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    }

    const fioHandler = (e) => {
        const value = e.target.value;
        setFio(value);
        if (!value.trim()) {
            setFioError('Поле должно быть заполнено');
        } else {
            setFioError('');
        }
    }

    const phoneNumberHandler = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        const re = /^\+996\s\d{3}\s\d{2}-\d{2}-\d{2}$/;
        if (!re.test(value)) {
            setPhoneNumberError('Некорректный номер телефона (Пример: +996 709 10-82-77)');
        } else {
            setPhoneNumberError('');
        }
    }

    const ageHandler = (e) => {
        const value = e.target.value;
        setAge(value);
        const re = /^[0-9]+$/;
        if (!re.test(value)) {
            setAgeError('Только цифры');
        } else {
            setAgeError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'fio':
                setFioDirty(true);
                break;
            case 'phoneNumber':
                setPhoneNumberDirty(true);
                break;
            case 'age':
                setAgeDirty(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className='app'>
            <form>
                <h1 className="h1" style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>Регистрация</h1>

                {(emailDirty && emailError) && <div style={{ color: 'red', display: "flex", justifyContent: "center" }}>{emailError}</div>}
                <input
                    style={{ margin: "auto", padding: 5, marginBottom: 5, border: "1px solid #222", borderRadius: "5px", width: "70%", display: "flex" }}
                    onChange={e => emailHandler(e)} value={email} onBlur={(e) => blurHandler(e)} name='email' type="text" placeholder='Введите ваш email...'
                />

                {(fioDirty && fioError) && <div style={{ color: 'red', display: "flex", justifyContent: "center" }}>{fioError}</div>}
                <input
                    style={{ margin: "auto", padding: 5, marginBottom: 5, border: "1px solid #222", borderRadius: "5px", width: "70%", display: "flex" }}
                    onChange={e => fioHandler(e)} value={fio} onBlur={(e) => blurHandler(e)} name='fio' type="text" placeholder='Введите ваше ФИО...'
                />

                {(phoneNumberDirty && phoneNumberError) && <div style={{ color: 'red', display: "flex", justifyContent: "center" }}>{phoneNumberError}</div>}
                <input
                    style={{ margin: "auto", padding: 5, marginBottom: 5, border: "1px solid #222", borderRadius: "5px", width: "70%", display: "flex" }}
                    onChange={e => phoneNumberHandler(e)} value={phoneNumber} onBlur={(e) => blurHandler(e)} name='phoneNumber' type="text" placeholder='Введите ваш номер телефона...'
                />

                {(ageDirty && ageError) && <div style={{ color: 'red', display: "flex", justifyContent: "center" }}>{ageError}</div>}
                <input
                    style={{ margin: "auto", padding: 5, marginBottom: 5, border: "1px solid #222", borderRadius: "5px", width: "70%", display: "flex" }}
                    onChange={e => ageHandler(e)} value={age} onBlur={(e) => blurHandler(e)} name='age' type="text" placeholder='Введите ваш возраст...'
                />

                <button type='submit' className="buttonStyle" style={{
                    marginTop: "15px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "solid",
                    borderColor: "#6ccb6f",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontSize: "16px",
                }}>
                    Регистрация
                </button>
            </form>

            {/* Выводим значения полей в режиме реального времени */}
            <div style={{ marginTop: "20px", margin: "auto", textAlign: "center" }}>
                <h2>Введенные данные в реальном времени:</h2>
                <p>Email: {email}</p>
                <p>ФИО: {fio}</p>
                <p>Номер телефона: {phoneNumber}</p>
                <p>Возраст: {age} лет</p>
            </div>
        </div>
    );
};

export default App;

