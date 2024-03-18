import Link from "next/link"
import Button from "@/app/components/button/Button"
import { stringify } from "querystring"

export default function PostPreview({ slug, id, title, previewItems }) {

    return <div className="postPreview"
        key={id}>
        <h2>{title}</h2>
        <ul> {
            previewItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))
        }
        </ul>
        {/* <button>
            <Link href={`/posts/${slug}`}>Read more</Link>
        </button> */}
        <Link href={`/posts/${slug}`}>
            <Button>
                Read more
            </Button>
        </Link>
    </div>
}

