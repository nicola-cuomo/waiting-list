import Link from "next/link";

type HomeButtonProps = {
    href: string, description: string, primary?: boolean
}

export default function HomeButton({ href, description, primary = false }: HomeButtonProps) {

    if (primary) return (
        <Link href={href} >
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                {description}
            </button>
        </Link >
    )

    return (<Link href={href} >
        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {description}
        </button>
    </Link>
    )
}