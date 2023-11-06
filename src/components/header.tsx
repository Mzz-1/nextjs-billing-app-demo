interface HeaderProps {
    heading: string;
    bold: number;
    border: number;
    icon:any
}

export function Header({ heading, bold, border,icon }: HeaderProps) {
    return (
        <div
            className={`h-[65px] text-[17px] flex items-center mb-3 justify-between ${
                border === 2 ? "border-y " : " border-b  px-[24px]"
            } font-[${bold}]`}
        >
            <h2 className="">{heading}</h2>
            {icon}
        </div>
    );
}
