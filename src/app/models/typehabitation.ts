export class TypeHabitation{
	constructor(
		public id: string,
		public name: string,
        public status: string,
		public price: number,
        public imagenes: string[],
		public description: string,
        public fecha_registro?: Date
		){}
}