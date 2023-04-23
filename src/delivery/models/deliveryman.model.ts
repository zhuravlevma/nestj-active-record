import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.model';

@Entity('deliverymans')
export class Deliveryman {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Order, (order) => order.deliveryman, {
    cascade: ['insert', 'update'],
  })
  orders: Order[];

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addOrder(order: Order) {
    if (this.orders.length > 3) {
      throw new Error('Exceeded the number of orders');
    }
    this.orders.push(order);
  }
}
