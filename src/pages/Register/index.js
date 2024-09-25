export default function Register() {
    return (
        <>
            <h1>Cadastre-se</h1>
            <div>
                <form>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name"/>

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                    
                    <label for="password">Senha:</label>
                    <input type="text" id="password" name="password"/>
                </form>
            </div>
        </>
    )
}