import type { NextAuthOptions, Profile } from 'next-auth'
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose from 'mongoose';
import { connectionSrt } from '@/app/lip/db';
import { DataUser, LoginInfo} from "@/app/lip/models/product"

type LogInData = {
    email: string,
    paword: string,
    idUser: string,
    role: string,
};

const connectDB = async () => {
    try {
      await  mongoose.connect(connectionSrt)  
    } catch (error) {
        process.exit(1)
    }
};
connectDB();

export const options: NextAuthOptions = {
    
    providers: [
        GoogleProvider({

            profile(profile: GoogleProfile) {

                return{
                    ...profile,
                    role: profile.role ?? "employers",
                    id: profile.id || profile.sub,
                    idUser: 'new-signIn'  
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
                
                keySignIn:{
                    type: "string"
                },
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "your-cool-Emai"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                },

                fullName:{
                    label:"fullName",
                    type: "text"
                },
                title:{
                    label:"title",
                    type: "text"
                },
                workEmail:{
                    label:"Email",
                    type: "email"
                },
                phoneNumber:{
                    label: "phone",
                    type: "number"
                },
                companyLocation:{
                    type: "string"
                },
                companyName:{
                    type: "string"
                },
                websiteUrl:{
                    type: "string"
                },
                rules:{
                    type: "checkbox"
                }
            },
            async authorize(credentials: any) {
                // check data log in 
                if(!credentials || !credentials.keySignIn) return null;

                if(credentials.keySignIn === "userSignIn"){

                    if(!credentials.email || !credentials.password) return null

                    try {
                        const dataUsers: LogInData = await LoginInfo.findOne({email: credentials?.email});
                        if (!dataUsers) return null;
                        if(dataUsers.paword != credentials.email) return null
      
                        return dataUsers;  
                    } catch (error) {
                        return null
                        
                    } 
      
                };
                
                // check data sign in
                if(credentials.keySignIn === "employersSignIn"){

                    if(!credentials.fullName 
                        || !credentials.title 
                        || !credentials.workEmail 
                        || !credentials.phoneNumber 
                        || !credentials.companyName 
                        || !credentials.companyLocation
                        || !credentials.websiteUrl
                        || !credentials.rules
                    ) return null
                }
                return null
            }
        }),  
    ],
    session: { // set the expiration time of sessiion
        strategy: 'jwt',
        maxAge: 43200// 12 hours
    },
    callbacks: {
        
        async jwt({ token, user }) {
 
            if (user) token.role = user.role
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.idUser = user.idUser
            }
      
            return token;    
        },

        async session({ session, token , user}) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.user.idUser = token.idUser  
            }
        
            return session
        },

        async signIn({ user, account, profile, email, credentials }) {
            
            if (account?.provider === 'google') { // create profile for new user

              const existingUser = await DataUser.find({email: profile?.email })
              if(!existingUser){
                await DataUser.create({
                    idUser:user.idUser,
                    email: profile?.email,
                    userCard: {
                        fullName: profile?.name,
                        title:'',
                        dateOfBirth: '',
                        gender: '',
                        numberPhone: 0,
                        email: profile?.email,
                        accommodation: '',
                        address: ''
                    },
                    abountUser: '',
                    WorkExperienceUser:{
                        jobTitle: '',
                        company: '',
                        dateForm:{
                            moth: '',
                            year: '',
                        },
                        dateTo:{
                            moth: '',
                            year: '',
                        },
                        description: ''
                    },
                    skills: [''],
                    education:{
                        major: '',
                        school: '',
                        dateForm:{
                            moth: '',
                            year: '',
                        },
                        dateTo:{
                            moth: '',
                            year: '',
                        },
                        description: ''
                    },
                    Certificates:{
                        certificatesName: '',
                        organization: '',
                        dateForm:{
                            moth: '',
                            year: '',
                        },
                        dateTo:{
                            moth: '',
                            year: '',
                        },
                        description: ''  
                    },
                    awardsAndHonors:{
                        awardsAndHonorsName: '',
                        organization: '',
                        dateForm:{
                            moth: '',
                            year: '',
                        },
                        
                        description: ''  
                    },
                    personalProject:{
                        projectName: '',
                        dateForm:{
                            moth: '',
                            year: '',
                        },
                        dateTo:{
                            moth: '',
                            year: '',
                        },        
                        description: '',
                        projectURL: ''
                    }

                })
              }
              return true
              
            }
            if(account?.provider === 'Credentials'){
                return true
            }
      
            return true;
        },
    },

    pages: {
        signIn: "/auth/signIn",
        
    },
 
}



