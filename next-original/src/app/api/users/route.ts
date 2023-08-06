import { NextResponse } from 'next/server'
 
export async function GET() {
    const todos=[
        {
            "userID":1,
            "title":"hello one",
            "completed": false,
            "id":1
        },
        {
            "userID":2,
            "title":"hello two",
            "completed": false,
            "id":1
        },
        {
            "userID":3,
            "title":"hello three",
            "completed": false,
            "id":1
        }
    ]
    console.log(todos);
    
 
 
  return NextResponse.json( todos )
}