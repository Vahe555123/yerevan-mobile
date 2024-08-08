// src/components/ResetPassword.js
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
    const nav = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("token")){
            nav("/")
        }
    }, [])
  const [password, setPassword] = useState('');
  const { token } = useParams();
console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/reset-password/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      alert('Пароль успешно сброшен.');
    } else {
      alert('Ошибка сброса пароля. Попробуйте снова.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{paddingTop: "200px"}}>
      <h2>Сброс пароля</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите новый пароль"
        required
      />
      <button type="submit">Сбросить пароль</button>
    </form>
  );
};

