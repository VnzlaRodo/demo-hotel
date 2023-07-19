export class Reservation{
	constructor(
		public id: string,        
		public fecha: Date,
        public status: string,
		public quantity: number,
        public id_client: string,
        public id_room: string,
        public id_Admin: string,
        public fecha_registro?: Date
      

	){}
}