import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // Implementação da lógica de autenticação
                console.log("Chegei");
                const user = { id: 1, name: 'User', email: 'phelippnd@gmail.com' }; // Exemplo de usuário fictício

                if (user) {
                    console.log("user", user);
                    return Promise.resolve(user as any);
                } else {
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    session: {

        strategy: "jwt",
    },
    //   pages: {
    //     signIn: '/auth/login',  // Caminho para a página de login
    //     error: '/auth/login',   // Redireciona para a página de login em caso de erro
    //   },

};

export default NextAuth(options);
