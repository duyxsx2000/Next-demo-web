import { NextResponse } from 'next/server'
import dataHome from "../../../../data/dataHome.json"

export async function GET(request: Request) {
    
    return NextResponse.json(dataHome)
}