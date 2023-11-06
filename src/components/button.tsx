interface ButtonProps {
    bold: number;
  }
  
  
  export function SaveButton({bold}: ButtonProps) {
      return (
      <button className={`bg-[#00A8E8] w-[113px] h-[48px] px-[40px] py-[14px] rounded-[8px] flex items-center  text-[#FFFFFF] my-[16px] font-[${bold}]`}>Save</button>
      ); 
    }
    
  