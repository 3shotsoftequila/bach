import { useState } from "react";

interface Props {
	fs?: boolean;			
	className: string;
	html: JSX.Element;
  	onClick: (isChecked: boolean) => void;
}

const Checkbox = (props: Props) => {
	const { fs, className, html, onClick } = props;
  	const [ isChecked, setChecked ] = useState<boolean>(fs || false)	
	  	
  	return (
        <div 
            className={`${className} btn ${(fs === undefined ? isChecked : fs) ? 'btn-checked' : ''}`} 
            onClick={() => { 	
				const update = fs === undefined ? !isChecked : !fs								
				onClick( update ); 
				setChecked( update ); 
			}}>
			{html}
        </div>
  	);
};
export default Checkbox;



//forcestate=boolean variable