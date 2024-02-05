import Image from "next/image";

export default function Photo(props: {url: string, desc: string[], caption: string, align: string}) {
    return (
        <div className={`flex mx-20 my-80 ${props.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`w-1/2 m-5`}>
                <div className={props.align === 'right' ? 'float-right' : ''}>
                    <Image src={ "/" + props.url } width={600} height={600} alt={ props.url } />
                    <p className="text-xl block py-5 font-light italic">{ props.caption }</p>
                </div>
            </div>
            <div className="w-1/2 m-5 text-2xl">
                { props.desc.map((paragraph) => {
                    return <p key={paragraph} className="pb-5">{ paragraph }</p>
                }) }
            </div>
        </div>
    )
}
