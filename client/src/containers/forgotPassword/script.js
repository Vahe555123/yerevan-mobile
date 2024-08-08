import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const nav = useNavigate()
useEffect(() => {
    if(localStorage.getItem("token")){
        nav("/")
    }
}, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Ссылка для сброса пароля отправлена на вашу почту.');
    } else {
      alert('Ошибка отправки. Попробуйте снова.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{paddingTop:"200px"}}>
      <h2>Забыл пароль</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите ваш email"
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

