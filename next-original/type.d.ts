type Users = {
    
        userID:number,
        title:string,
        completed: boolean,
        id:number
    
}



type Job = {title: string | undefined }

type MenuJob = {
        title: string;
        listJob?: Array<Job>;
};
      
type DataJobs = {
        title: string;
        MenuJob?: Array<MenuJob>;
};


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



    