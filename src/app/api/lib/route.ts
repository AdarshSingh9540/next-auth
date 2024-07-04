
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH={
    providers: [
      CredentialsProvider({
          name:"email",
          credentials:{
              username: { label: 'username', type: 'text', placeholder: 'email' },
              password: { label: 'password', type: 'password', placeholder: 'password' },
          },
          async authorize(credentials:any){
              console.log(credentials)
              return{
                  id:"user1",
                  name:"adarsh",
                  email:"adarsh@gmail.com"
              }
          }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID|| "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ||""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID||"",
        clientSecret: process.env.GITHUB_SECRET||""
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      jwt: async ({ user, token }: any) => {
          if (user) {
              token.uid = user.id;
          }
          return token;
      },
    session: ({ session, token, user }: any) => {
      console.log(session)
        if (session.user) {
            session.user.id = token.uid
        }
        return session
    }
  },
  }
