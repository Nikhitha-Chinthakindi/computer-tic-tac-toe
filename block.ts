
export class Block {
	free: boolean = true;

	value: string = ""; 
	symbol: string = ""; 


	setValue(value) {
		this.value = value

		if( this.value == "tick" ) {
			this.symbol = "X";
		} else {
			this.symbol = "✔️";
		}
	}


}  
