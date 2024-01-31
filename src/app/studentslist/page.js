
import Link from "next/link";

export default function stdlist(){
    return(
        <div>
            <ul>
                <li>
                <Link href="/studentslist/haris"> haris</Link>    
                </li>
                <li><Link href="/studentslist/hamza"> hamza</Link>    </li>
                <li><Link href="/studentslist/noman"> noman</Link>    </li>
                <li><Link href="/studentslist/touseef"> touseef</Link>    </li>
            </ul>
        </div>
    )
}