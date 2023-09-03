import type { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'



export const options: NextAuthOptions = {
    
    providers: [
        GoogleProvider({
            profile(profile: GoogleProfile) {
  
                return{
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.sub,
                    
                }
              },
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
      
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-cool-Emai"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password)
                  return null
                // This is where you need to retrieve user data 
                // to verify with credentials               
               // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", email: "dave@gmail.com", password: "11111", role:"admin"  }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },

        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
       

    },

    pages: {
        signIn: "/auth/signIn",
    },
  
}



