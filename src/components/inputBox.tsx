interface InputBoxProps {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    note?: string;
    onChange?: any;
    options?: any;
    required: boolean;
}

export function InputBox({
    type,
    placeholder,
    value,
    label,
    onChange,
    required,
}: InputBoxProps) {
    return (
        <div className="mb-3">
            <label className="text-[12px] font-[400] ">
                {label} {required && <span className="text-[red]">*</span>}
                <input
                    className="max-w-[480px] w-[460px] bg-[#F0F0F0] rounded-md h-[48px] px-3 mt-[8px] outline-none text-[#979797]"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export function TextArea({
    placeholder,
    value,
    label,
    onChange,
    note,
    required
}: InputBoxProps) {
    return (
        <div className="">
            <label className="text-[12px] font-[400] ">
                {label} {required && <span className="text-[red]">*</span>}
                <textarea
                    className="w-full bg-[#F0F0F0] min-h-[72px] rounded-md h-[48px] py-[16px] px-[15px] mt-[8px] text-[#979797]"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
            {note && (
                <p className="text-[11px] text-[#979797] mt-[8px]">{note}</p>
            )}
        </div>
    );
}

export function Dropdown({
    placeholder,
    value,
    label,
    onChange,
    note,
    options,
    required
}: InputBoxProps) {
    return (
        <div className="">
            <label className="text-[12px] font-[400] ">
                {label} {required && <span className="text-[red]">*</span>}
                <select
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#F0F0F0] rounded-md h-[48px] outline-none py-[16px] px-[15px] mt-[8px] text-[#979797]"
                    placeholder={placeholder}
                >
                    {options.map((items: string) => {
                        return (
                            <option key={items} value={items}>
                                {items}
                            </option>
                        );
                    })}
                </select>
            </label>
            {note && (
                <p className="text-[11px] text-[#979797] mt-[8px]">{note}</p>
            )}
        </div>
    );
}
