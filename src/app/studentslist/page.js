
import Link from "next/link";

export default function stdlist(){
    return(
        <div>
            <ul>
                <li>
                <Link href="/studentslist/haris"> haris : click on get value in next page</Link>    
                </li>
                <li><Link href="/studentslist/hamza"> hamza : click on get value in next page</Link>    </li>
                <li><Link href="/studentslist/noman"> noman : click on get value in next page</Link>    </li>
                <li><Link href="/studentslist/touseef"> touseef : click on get value in next page</Link>    </li>
            </ul>
        </div>
    )
}