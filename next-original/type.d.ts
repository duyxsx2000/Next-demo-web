type Users = {
    
    userID:number,
    title:string,
    completed: boolean,
    id:number
    
}

type QuantifyData = {
    jobs: number,
    employers: number,
    users: number,
};

type WaitingData = {
    jobs: number,
    employers: number,
    users: number,
}

type ProfileUser = {
    idUser:string,
    email: string,
    userCard: {
        fullName: string,
        title: string,
        dateOfBirth: string,
        gender: string,
        numberPhone: number,
        email: string,
        accommodation: string,
        address: string
    },
    abountUser: string,
    WorkExperienceUser:{
        jobTitle: string,
        company: string,
        dateForm:{
            moth: string,
            year: string,
        },
        dateTo:{
            moth: string,
            year: string,
        },
        description: string
    },
    skills: string[],
    education:{
        major: string,
        school: string,
        dateForm:{
            moth: string,
            year: string,
        },
        dateTo:{
            moth: string,
            year: string,
        },
        description: string
    },
    Certificates:{
        certificatesName: string,
        organization: string,
        dateForm:{
            moth: string,
            year: string,
        },
        dateTo:{
            moth: string,
            year: string,
        },
        description: string  
    },
    awardsAndHonors:{
        awardsAndHonorsName: string,
        organization: string,
        dateForm:{
            moth: string,
            year: string,
        },
        
        description: string  
    },
    personalProject:{
        projectName: string,
        dateForm:{
            moth: string,
            year: string,
        },
        dateTo:{
            moth: string,
            year: string,
        },        
        description: string,
        projectURL: string
    }
}



type JobName = {title: string | undefined }
type Jobz = {title: string}
type MenuJob = {
        title: string;
        listJob?: Array<Jobz>;
};
      
type DataJobs = {
        title: string;
        MenuJob?: Array<MenuJob>;
} ;


type Tool = {
        title: string;
        image: string;                           
        text: string
}

type Employers = {
        title: string;
        city: string;
        image: string;
        jobs:{
                quantity: number,
                skills: Array<string>
        }
}

type DataHome = {
        listTool: Array<Tool>;
        listTopEmployers: Array<Employers>;
        dataSearch: {
                city: Array<string>;
                jobSunggest: Array<string>
        }

}

type job = {
        title: string,
        address: string,
        method: string,
        skills:string[],
        wage:number
    
}

type company = {
        name: string,
        logo: string
}

type  DetailJob = {
    id: number,
    keyWord: string[]
    timePost: number,
    company: company
    job:job,
    reasons: string[],
    jobDescription: string[],
    request: string[]
} | null

type TypeJob =  {
      
    status: string,
    rank:string,
    idJob:string,
    idEmployers:any,
    datePost: Date,
    dateAccept: Date,

    company:{
        companyName: string,
        companyUrl: string,
        companyEmail: string,
        companyPhoneNumber: Number,
        companyCity: string,
        companyAddress: string,    
    },
    job:{
        jobTitle: string,
        jobCity: string,
        jobAddress: string,
        jobMethod: string,
        jobRole: string,
        jobRoleSpecific: string,
        jobWage: Number,
        jobDeadline:{
        from: string,
        to:string
        },
        jobSkills:string[],
    },
    reasons:string[],
    description:string[],
    requirements:string[]
};

type DataPost = {
    fullName:string,
    title:string ,
    workEmail: string,
    phone: string,
    companyLocation: string[],
    companyName: string,
    websiteUrl: string,
};
    
type TypeEmployers = {
    idEmployers:string,
    status:string,
    role:string,
    fullName:string,
    title:string ,
    workEmail: string,
    phone: string,
    companyLocation: string,
    companyName: string,
    websiteUrl: string,
    dateRegister: Date,
    dateAccept: Date

};

type Count = {
    jobs: Number,
    employers: number,
    users: number
};

type ClusterCount = {
    ban: Count,
    error: Count,
    quantify: Count,
    await: Count
}
type CountData = {
    all: ClusterCount
    today: ClusterCount
    thisMonth: ClusterCount

}

type TypeRes = {
    notification: string,
    data: any
};

type ApplicationLetter = {
    idUser: string,
    idjob: string,
    idCv: string,
    nameUser: string,
    date: string
}

    