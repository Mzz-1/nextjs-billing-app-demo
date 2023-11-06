interface HeaderProps {
    heading: string;
    bold: number;
    border: number;
    icon: any;
}

export function Header({ heading, bold, border, icon }: HeaderProps) {
    console.log(bold);
    return (
        <div
            className={`h-[65px] text-[17px] flex items-center mb-3 justify-between ${
                border === 2 ? "border-y " : " border-b  px-[24px]"
            }`}
        >
            <h2 className={`font-[${bold}]`}>{heading}</h2>
            {icon}
        </div>
    );
}
