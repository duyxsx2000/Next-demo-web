import { NextResponse } from 'next/server'
import listjobsData from "../../../../data/dataJobs.json"
export async function GET(request: Request) {
    
   
 
    return NextResponse.json(listjobsData)
}