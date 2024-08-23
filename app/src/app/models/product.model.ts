export interface Product {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'Reportado' | 'Encontrado'  | 'Validado' | 'Entregado';
  location?: string;
  dateReported: Date;
}
