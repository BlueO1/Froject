import { useState } from "react";
import axios from "axios";
const LoginForm = () =>{
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID': "4eb15d44-e314-4f0d-8e14-b40b068a6644",
        'User-Name': username,
        'User-Secret': password
        };

        try {
        await axios.get('https://api.chatengine.io/chats', {headers:authObject})

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
        } catch (error) {
            setError('Login Again');
        }
        // userName/passWord 
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat App
                </h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" // Username
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="input" 
                    placeholder="userName" 
                    required />

                    <input type="password" // Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input" 
                    placeholder="passWord" 
                    required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chat</span>
                        </button>
                    </div>
                    <h2 className="error">{error}
                    </h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;