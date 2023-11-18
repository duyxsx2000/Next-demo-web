import mongoose from "mongoose"
import Email from "next-auth/providers/email";
const { Schema } = mongoose;

const Test222 = new mongoose.Schema({ name: String});

const DataJobs = new mongoose.Schema({
    jobId: String,
    keyWord: [String],
    timePost: Date,
    company:{
        name: String,
        logo: String
    },
    detailJob:{
        title: String,
        address: String,
        method: String,
        skillS: [String],
        wage: Number
    },
    reasons: [String],
    jobDescription: [String],
    request: [String]
});

const dataUser = new mongoose.Schema({
    idUser:String,
    email: String,
    userCard: {
        fullName: String,
        title: String,
        dateOfBirth: String,
        gender: String,
        numberPhone: Number,
        email: String,
        accommodation: String,
        address: String
    },
    abountUser: String,
    WorkExperienceUser:{
        jobTitle: String,
        company: String,
        dateForm:{
            moth: String,
            year: String,
        },
        dateTo:{
            moth: String,
            year: String,
        },
        description: String
    },
    skills: [String],
    education:{
        major: String,
        school: String,
        dateForm:{
            moth: String,
            year: String,
        },
        dateTo:{
            moth: String,
            year: String,
        },
        description: String
    },
    Certificates:{
        certificatesName: String,
        organization: String,
        dateForm:{
            moth: String,
            year: String,
        },
        dateTo:{
            moth: String,
            year: String,
        },
        description: String  
    },
    awardsAndHonors:{
        awardsAndHonorsName: String,
        organization: String,
        dateForm:{
            moth: String,
            year: String,
        },
        
        description: String  
    },
    personalProject:{
        projectName: String,
        dateForm:{
            moth: String,
            year: String,
        },
        dateTo:{
            moth: String,
            year: String,
        },        
        description: String,
        projectURL: String
    }


});

const loginInfo = new mongoose.Schema({
    
    idUser:String,
    name: String,
    email: String,
    password: String,
    date: Date, 
    status: String, 
    role: String  
});
const dataAllJob = new mongoose.Schema({
    status: String,
    rank:String,
    idJob:String,
    idEmployers:String,
    datePost:Date,
    dateAccept: Date,
    countApply: Number,
    countFeedBack: Number,

    company:{
        companyName: String,
        companyUrl: String,
        companyEmail: String,
        companyPhoneNumber: Number,
        companyCity: String,
        companyAddress: String,    
    },
    job:{
        jobTitle: String,
        jobCity: String,
        jobAddress: String,
        jobMethod: String,
        jobRole: String,
        jobScecific: String,
        jobWage: Number,
        jobDeadline:{
            from: Date,
            to:Date
        },
        jobSkills:[String],
    },
    reasons:[String],
    description:[String],
    requirements:[String]

});

const dataEmployers = new mongoose.Schema({
    idEmployers: String,
    fullName: String,
    title: String,
    status:String,
    role:String,
    workEmail: String,
    Jobs: [String],
    phone: Number,
    companyLocation:[String],
    companyName: String,
    websiteUrl: String,
    dateRegister: Date,
    dateAccept: Date
});

const dataApply = new mongoose.Schema({
    idUser: String,
    idJob: String,
    date: Date,
    nameUser: String,
    idCv: String
})

export const Test1289 = mongoose.models.Test123 || mongoose.model('Test123', Test222,"test02");
export const DataDetailJobs = mongoose.models.dataJobs || mongoose.model('dataJobs', DataJobs,'dataJobs')
export const DataUser = mongoose.models.dataUser || mongoose.model('dataUser', dataUser,'dataUser')
export const LoginInfo = mongoose.models.loginInfo || mongoose.model('loginInfo',loginInfo,'loginInfo')
export const DataAllJob = mongoose.models.dataAllJob || mongoose.model('dataAllJob',dataAllJob,'dataAllJob')
export const DataEmployers = mongoose.models.dataEmployers || mongoose.model('dataEmployers',dataEmployers,'dataEmployers')
export const DataApply = mongoose.models.dataApply || mongoose.model('dataApply',dataApply,'dataApply')


